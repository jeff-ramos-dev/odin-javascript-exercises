const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
  return x - y
};

const sum = function(numArray) {
  const length = numArray.length
  if (!numArray) {
    return 0
  }
  if (length === 1) {
    return numArray[0]
  }
  let total = 0
  for (let i = 0; i < length; i++) {
    total += numArray[i] 
  }
  return total
};

const multiply = function(numArray) {
  const length = numArray.length
  if (!numArray) {
    return 0
  }
  if (length === 1) {
    return numArray[0]
  } 
  let total = 1
  for (let i = 0; i < length; i++) {
    total *= numArray[i] 
  }
  return total
};

const power = function(num, pow) {
  return num ** pow
};

const factorial = function(num) {
  switch(num) {
    case(0):
      return 1
    case(1):
      return 1
    default:
      break;
  }
  let multiplier = num - 1
  let total = num
  while (multiplier > 0) {
    total *= multiplier
    multiplier--
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
