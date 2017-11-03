
import "babel-polyfill";

function *g1() {
  console.log('Hello');
  yield 'Yield 1 Ran..';
  console.log('World');
  yield 'Yield 2 Ran...';
  return 'Returned..';
}

var g = g1();
console.log(g.next().value);
for (let gTemp of g) {
  console.log(gTemp);
}
