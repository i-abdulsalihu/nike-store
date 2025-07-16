export interface Level {
  images: string[];
  word: string;
}

export const levels: Level[] = [
  {
    images: [
      '/images/level1/1.jpg',
      '/images/level1/2.jpg',
      '/images/level1/3.jpg',
      '/images/level1/4.jpg',
    ],
    word: 'apple',
  },
  {
    images: [
      '/images/level2/1.jpg',
      '/images/level2/2.jpg',
      '/images/level2/3.jpg',
      '/images/level2/4.jpg',
    ],
    word: 'house',
  },
];
