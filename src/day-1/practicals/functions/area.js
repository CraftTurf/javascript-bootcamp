// area of a circle is pi * r * r
function area(okiki) {
  var x = (Math.PI * okiki * okiki);
  var area = x.toFixed(2);
  console.log(area);

  console.log('this area was calculated on: ', new Date());
}

area(6);
