const counter = function(arr) {
  return 'There are ' + arr.length + ' elements';
}

const adder = function(a, b) {
  return `The sum of ${a} and ${b} = ${a + b}`;
}

const pi = 3.14;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
