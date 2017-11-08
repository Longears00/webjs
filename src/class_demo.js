
class Mammal {
  constructor(sound) {
    this.sound = sound;
  }

  talk() {
    console.log(this.sound);
  }
}

class Dog extends Mammal {
  constructor() {
    super('woffel'); //call constructor Mammal
  }
}

let fluffykins = new Mammal('woof!');
fluffykins.talk();

let myDog = new Dog();
myDog.talk();
console.log(typeof Dog);
