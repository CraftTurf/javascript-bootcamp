function Animal(name, breed){
  this.name = name;
  this.breed = breed;
}


Animal.prototype.isMammal = function(){

  console.log(this.breed,'is a mammal');
}


const checkBreed = new Animal("Elephantidae", "Elephant");

elephant.isMammal();
