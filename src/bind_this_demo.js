
let dog = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound);
      },
  };

dog.talk();

let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog);
boundFunction();//woof

// talkFunction(); //error undefined

function talk() {
  let sound = 'miao';
  console.log(this.sound);
}

let boromir = {
    speak: talk,
    sound: 'mordor',
  };

let gollum = {
    jabber: boromir.speak,
    sound: 'my preciousss',
  };

gollum.jabber();

// let talkBoundToBoromir = talk.bind(boromir);
// talkBoundToBoromir();

boromir.speak();
