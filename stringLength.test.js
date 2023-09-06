const stringLength = require('./stringLength');

test('stringLength function should return the correct character count for valid input', () => {
  // Test cases for valid input
  expect(stringLength('Hello!')).toBe(6); // Regular string
  expect(stringLength('12345')).toBe(5); // Numeric string
  expect(stringLength('   ')).toBe(3); // String with spaces
});

test('stringLength function should handle null and undefined inputs', () => {
  // Test cases for null and undefined inputs
  expect(() => stringLength(null)).toThrow('Input must be a string');
  expect(() => stringLength(undefined)).toThrow('Input must be a string');
});

test('stringLength function should throw an error for input strings not within the length range', () => {
  // Test cases for input strings not within the length range
  expect(() => stringLength('')).toThrow(
    'Input string length must be between 1 and 10 characters',
  );
  expect(() => stringLength('TooLongString')).toThrow(
    'Input string length must be between 1 and 10 characters',
  );
});

test('stringLength function should not throw an error for input strings within the length range', () => {
  // Test cases for input strings within the length range
  expect(stringLength('a')).toBe(1); // Minimum length (1 character)
  expect(stringLength('ShortStr')).toBe(8); // Within the length range
});
