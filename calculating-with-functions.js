// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const defineNumber = value => (arg) => typeof arg === 'function' ? arg.call(null, value) : value;

const defineOperation = fn => (arg) => {
  const operand2 = typeof arg === 'function' ? arg.call() : arg;
  return (operand1) => fn(operand1, operand2);
}

const plus = defineOperation((a, b) => a + b);
const minus = defineOperation((a, b) => a - b);
const times = defineOperation((a, b) => a * b);
const dividedBy = defineOperation((a, b) => Math.floor(a / b));

const zero = defineNumber(0);
const one = defineNumber(1);
const two = defineNumber(2);
const three = defineNumber(3);
const four = defineNumber(4);
const five = defineNumber(5);
const six = defineNumber(6);
const seven = defineNumber(7);
const eight = defineNumber(8);
const nine = defineNumber(9);
