
let animal = {
    weight: 23,
    sound: 'woof',
  };

function makeSound({ species = 'animal', sound }) {
  console.log(species);
}

makeSound(animal);

let [a, b, c] = [1, 2, 3];
console.log(a);
