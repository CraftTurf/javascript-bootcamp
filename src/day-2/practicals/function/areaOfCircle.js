/*
- calculate area of circle
- log the date and time of operation using the native Date object
- return a value of two decimal places
*/

function area(n) {
  var x = (Math.PI * n * n);
  var area = x.toFixed(2);
  
  console.log('this are was calculated on: ', new Date());
}

area(6);
console.log(area);
