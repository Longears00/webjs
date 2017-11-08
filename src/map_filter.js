
let animal = [
{ name: '1', species: '2' },
{ name: '1', species: '2' },
{ name: '5', species: '2' },
{ name: '5', species: '3' },
{ name: '6', species: '3' },
];

let output = animal.filter((sign) => sign.species === '2');

// let rejectOutput =  animal.reject((sign) => sign.species === '2');

console.log(output);

// console.log(rejectOutput);
let check = '1';
let names = animal.map((sign)=> sign.name == check);

console.log(names);
