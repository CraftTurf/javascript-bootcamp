
var person = {};
Object.defineProperty(person,
                          "name",{
                             writable: false,
                             value: "Ken"
});
console.log(person.name); // output Ken
person.name = "Greg";
console.log(person.name); // output Ken
