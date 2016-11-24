// console.log(__dirname);
// console.log(__filename);

var events = require('events');
var util = require('util');

// new class
class Person {
  constructor(name) { this.name = name; }
  getName() { return this.name; }
}

// inheritance from events.EventEmitter for Person
util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Mary = new Person('Mary');
var Paul = new Person('Paul');
var people = [James, Mary, Paul];

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(`${person.getName()} said: ${mssg}`);
  })
})

James.emit('speak', 'Whaaaaat?');
Mary.emit('speak', 'I\'m really cool!');
