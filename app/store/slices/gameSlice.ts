import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  level: number;
  score: number;
  guessedWords: string[];
}

const initialState: GameState = {
  level: 1,
  score: 0,
  guessedWords: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementLevel: (state) => {
      state.level += 1;
    },
    incrementScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    addGuessedWord: (state, action: PayloadAction<string>) => {
      state.guessedWords.push(action.payload);
    },
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
  },
});

export const { incrementLevel, incrementScore, addGuessedWord, setLevel } = gameSlice.actions;

export default gameSlice.reducer;
