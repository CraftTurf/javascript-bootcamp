/*
function takes one argument
function checks the type of argument
function performs action
*/
//@flow

var check = function argument(x) {
    var type = typeof x;
    console.log(type);
    switch(type){
      case 'number':
        console.log(x, 'is a number');
        break;
      case 'string':
        console.log(x, 'is a string');
        break;
      default:
        console.log(x, 'is unknown to me');
        break;
    }
}

check({});
