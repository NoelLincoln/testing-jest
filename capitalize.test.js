const capitalize = require('./capitalize');

test('capitalize function should make all characters uppercase', () => {
  expect(capitalize('hello')).toBe('HELLO');
});
test('capitalize function should handle integer input', () => {
  expect(() => capitalize(123)).toThrow('Input must be a string');
});
test('capitalize function should capitalize a mixed-case string', () => {
  expect(capitalize('HeLlO')).toBe('HELLO');
});
