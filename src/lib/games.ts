export type Game = {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
};

export const games: Game[] = [
  {
    slug: 'kiddie-Kickers',
    title: 'Kiddie Kickers',
    description: 'A fun and exciting game for the little ones. Jump, run, and collect stars in a vibrant, playful world!',
    coverImage: 'kiddie-Kickers-cover',
  },
  {
    slug: 'kirbys-adventure-land',
    title: "Kirby's Adventure Land",
    description: 'Explore a vast and colorful world with Kirby. Inhale enemies and copy their abilities to save Dream Land!',
    coverImage: 'kirby-adventure-land-cover',
  },
];
