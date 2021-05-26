export const cartesian = (...a): string[][] =>
  a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

export const NUMBERS_TO_LETTERS = {
  0: [],
  1: [],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
};


