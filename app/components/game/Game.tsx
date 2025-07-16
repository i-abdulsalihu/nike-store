"use client";

"use client";

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState } from '../../store/store';
import { incrementLevel, incrementScore, setLevel } from '../../store/slices/gameSlice';
import { levels } from '../../data/levels';
import ImageGrid from './ImageGrid';
import AnswerBox from './AnswerBox';
import CharacterPool from './CharacterPool';
import { Button } from "@/components/ui/button";

export default function Game() {
  const dispatch = useDispatch();
  const level = useSelector((state: RootState) => state.game.level);
  const score = useSelector((state: RootState) => state.game.score);

  const [currentLevel, setCurrentLevel] = useState(levels[level - 1]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [characterPool, setCharacterPool] = useState<string[]>([]);
  const [isWrong, setIsWrong] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const levelParam = urlParams.get('level');
    if (levelParam) {
      dispatch(setLevel(parseInt(levelParam, 10)));
    }
  }, [dispatch]);

  useEffect(() => {
    setCurrentLevel(levels[level - 1]);
    setIsCorrect(false);
  }, [level]);

  useEffect(() => {
    if (currentLevel) {
      const wordChars = currentLevel.word.split('');
      const distractors = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(char => !wordChars.includes(char));
      const pool = [...wordChars, ...distractors.slice(0, 12 - wordChars.length)];
      setCharacterPool(pool.sort(() => Math.random() - 0.5));
    }
  }, [currentLevel]);

  const handleCharacterSelect = (char: string) => {
    if (answer.length < currentLevel.word.length) {
      setAnswer([...answer, char]);
    }
  };

  const handleDeselectCharacter = (index: number) => {
    setAnswer(answer.filter((_, i) => i !== index));
  };

  const handleShare = () => {
    const url = `${window.location.origin}?level=${level}`;
    navigator.clipboard.writeText(url);
    alert('Level URL copied to clipboard!');
  };

  useEffect(() => {
    if (answer.length === currentLevel.word.length) {
      if (answer.join('') === currentLevel.word) {
        setIsCorrect(true);
        setTimeout(() => {
          dispatch(incrementScore(10));
          dispatch(incrementLevel());
          setAnswer([]);
        }, 1000);
      } else {
        setIsWrong(true);
        setTimeout(() => {
          setIsWrong(false);
          setAnswer([]);
        }, 500);
      }
    }
  }, [answer, currentLevel, dispatch]);

  if (!currentLevel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-12">
      <div className="flex w-full justify-between px-8">
        <div className="text-2xl">Score: {score}</div>
        <Button onClick={handleShare}>Share</Button>
      </div>
      <ImageGrid images={currentLevel.images} />
      <motion.div
        animate={{ x: isWrong ? [-10, 10, -10, 10, 0] : 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnswerBox
          answer={answer}
          wordLength={currentLevel.word.length}
          onDeselectCharacter={handleDeselectCharacter}
        />
      </motion.div>
      <CharacterPool
        characters={characterPool}
        onCharacterSelect={handleCharacterSelect}
        isCorrect={isCorrect}
      />
    </div>
  );
}
