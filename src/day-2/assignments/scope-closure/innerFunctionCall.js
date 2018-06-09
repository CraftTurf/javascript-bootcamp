/*
 A function that calls its outer function that
calculates the area of a circle by passing the radius as argument

*/

function a (radius){
var area = Math.PI * (radius * radius);
 return area;

    function b  () {
      var radius = 4;
       console.log('Area of a circle:' +area);
    }
  b();

}
a(4);
