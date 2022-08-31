var {ListPeople, People} = require('./people');

var people = new ListPeople();
var p1 = new People('nguyen', 10);
people.add(p1);
p1 = new People('Quoc', 10);
people.add(p1);
var arPeople = people.getPeople();

console.log(arPeople);

var os = require('os');
console.log(os.platform(), os.homedir());