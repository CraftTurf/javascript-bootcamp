// function to dispplay number of arguments passed
var howManyArgs = function howManyArgs() {
  console.log(arguments.length);
}

howManyArgs(10, 'okiki', 7, 'code'); // expected output: 4

module.exports = howManyArgs;
