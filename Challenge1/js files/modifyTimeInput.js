const addZeroToSingleDigitValue = (value) => {
  value = parseInt(value);
  if (value < 10) {
    return '0' + value;
  }
  return value;
};

export {addZeroToSingleDigitValue};
