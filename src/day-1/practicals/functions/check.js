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

// function takes one argument
// function checks the type of argument
// function returns a console statement

// var check = function argument(x) {
//     var type = typeof x;
//     console.log(type);
//     switch(type){
//       case 'number':
//         console.log(x, 'is a number');
//         break;
//       case 'string':
//         console.log(x, 'is a string');
//         break;
//       default:
//         console.log(x, 'is unknown to me');
//         break;
//     }
// }
//
// check({});
