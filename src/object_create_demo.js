
//object.create() 意思是什么？
/*意思是 static method on the object prototyp
*creates a new object with the prototype
*set to a certain object
*
*Dog.prototype.talk  这种想使用talk 只能用new
*Dog.talk 想使用只能用Object.create()
*
*/
const cat = {
    makeSound: function () {
        console.log(this.sound);
      },
  };

const mark = Object.create(cat);
mark.sound = 'mewo';
mark.makeSound();

console.log('is mark a cat?', cat.isPrototypeOf(mark));

function Dog() {}

// Dog.talk = function () {
//     console.log(this.sound);
//   };
//
// const mydog = Object.create(Dog);
// mydog.sound = 'dog';
// mydog.talk();

Dog.prototype.talk = function () {
    console.log(this.sound);
  };

const mydog2 = new Dog();
mydog2.sound = 'dog2';
mydog2.talk();

const rabbit = {
    init: function (sound) {
        this.sound = sound;
      },

    makeSound: function () {
        console.log(this.sound);
      },
  };

const tinyPeople = Object.create(rabbit);
tinyPeople.init('i am not rabbit');
tinyPeople.makeSound();
