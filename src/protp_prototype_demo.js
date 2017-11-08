
let animals = { class: 'animal' };

let cat = { breed: 'munchkin' };
Object.setPrototypeOf(cat, animals);
let myCat = { name: 'Fluffykins' };

Object.setPrototypeOf(myCat, cat);
console.log(myCat.name);
console.log(myCat.breed);
console.log(myCat.__proto__);
cat.tailLength = 15;
console.log(myCat.__proto__);

console.log(myCat.class);

// __protp__ 指向一个对象被设定的prototype
// prototype 是一个function设置的 只有function有prototype这个对象 当使用new的时候 prototype就会给到new的object 对象上
