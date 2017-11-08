
function talk() {
  console.log(this);
  console.log(this.sound);
}

let animal = {
    sound: 'animal',
    talk: talk,
  };

let cat = {
    sound: 'meow',
  };

let dog = {
    sound: 'woof',
  };

let prarieDog = {
    howl: function () {
        console.log(this.sound.toUpperCase());
      },
  };

Object.setPrototypeOf(cat, animal);

animal.talk = function () {
    console.log('i am a litter teapot');
  };

Object.setPrototypeOf(dog, animal);

Object.setPrototypeOf(prarieDog, dog);
cat.talk();
dog.talk();
prarieDog.howl();
