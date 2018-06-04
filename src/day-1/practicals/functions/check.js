// function to check data type and display a message
function check(x) {
  var y = typeof x;
  if (y === 'string') {
    console.log(x, 'is a string');
  } else if (y === 'number') {
    console.log(x, 'is a number');
  } else if (y === 'object') {
    console.log(x, 'is an object');
  }
}

check({}); // expected output: object
