function OtherMammal(){
  Mammal.call(this)
}

OtherMammal.prototype = new Mammal();

OtherMammal.prototype.constructor = OtherMammal;

OtherMammal.prototype.welcome = function(){
  console.log('welcome to the animal kingdom');
};

const elephant = new OtherMammal();
elephant.welcome();

console.log(elephant instanceof Mammal);
console.log(elephant instanceof OtherMammal);
