import { motion } from 'framer-motion';
import { flipVariant } from '../../lib/animations';

interface AnswerBoxProps {
  answer: string[];
  wordLength: number;
  onDeselectCharacter: (index: number) => void;
}

export default function AnswerBox({ answer, wordLength, onDeselectCharacter }: AnswerBoxProps) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: wordLength }).map((_, index) => (
        <motion.div
          key={index}
          className="flex h-12 w-12 cursor-pointer items-center justify-center border-2 border-gray-400"
          onClick={() => onDeselectCharacter(index)}
          variants={flipVariant}
          initial="hidden"
          animate={answer[index] ? 'visible' : 'hidden'}
        >
          {answer[index] || ''}
        </motion.div>
      ))}
    </div>
  );
}
