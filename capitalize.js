const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  return string.toUpperCase();
};

module.exports = capitalize;
