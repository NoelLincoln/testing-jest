const stringLength = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  const { length } = input;

  if (length < 1 || length > 10) {
    throw new Error('Input string length must be between 1 and 10 characters');
  }

  return length;
};

module.exports = stringLength;
