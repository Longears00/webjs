import fs from 'fs';

let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];

let output = fs.readFileSync('./src/temp.txt', 'utf8').trim().split(' \n').map(line => line.split('\t')).reduce((customer, line)=> {
    console.log(line[0]);
    return customer;
  }, {});
// console.log(output);

// var totaalAmount = orders.reduce((sum, order)=> sum + order.amount, 0);
