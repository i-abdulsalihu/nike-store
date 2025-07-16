import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/button';
import { tadaVariant } from '../../lib/animations';

interface CharacterPoolProps {
  characters: string[];
  onCharacterSelect: (character: string) => void;
  isCorrect: boolean;
}

export default function CharacterPool({
  characters,
  onCharacterSelect,
  isCorrect,
}: CharacterPoolProps) {
  return (
    <motion.div
      className="grid grid-cols-6 gap-2"
      variants={tadaVariant}
      animate={isCorrect ? 'visible' : 'hidden'}
    >
      {characters.map((char, index) => (
        <Button key={index} onClick={() => onCharacterSelect(char)}>
          {char}
        </Button>
      ))}
    </motion.div>
  );
}
