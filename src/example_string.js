
let str = 'hello,my name is ';

console.log(str.startsWith('hello'));
console.log(str.endsWith('is'));
console.log(str.includes('is'));

console.log(Number.isInteger(1));

let args = [1, 2, 3];

function test() {
  console.log(args);
}

test(...args);

let myArray = [11, 22, 11, 33, 44, 56];
let myset = new Set(myArray);
myset.add('1');

console.log(myset.size);
console.log(myset);

myset.forEach((val)=>console.log(val));

let myMap = new Map([['a1', 'hello'], ['b2', 'goobay']]);
myMap.set('c3', 'foo');

let carWeakSet = new WeakSet();
let car1 = { make: 'honda', model: 'civic' };
carWeakSet.add(car1);
