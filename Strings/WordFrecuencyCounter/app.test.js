const countWords = require('./app');

test('countWords should return the correct word frequencies', () => {
  const input = "I have a cat named Meow and a dog named Woof. I love the dog a lot.He is larger than a small horse.";
  const expectedOutput = new Map([
    ['I', 2],
    ['have', 1],
    ['a', 4],
    ['cat', 1],
    ['named', 2],
    ['Meow', 1],
    ['and', 1],
    ['dog', 2],
    ['Woof.', 1],
    ['love', 1],
    ['the', 1],
    ['lot.He', 1],
    ['is', 1],
    ['larger', 1],
    ['than', 1],
    ['small', 1],
    ['horse.', 1]
  ]);

  const result = countWords(input);

  expect(result).toEqual(expectedOutput);
});
