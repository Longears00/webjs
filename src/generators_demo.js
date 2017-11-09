
import fetch from 'node-fetch';

/*
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(x => console.log(x));
*/

run(function* getJson() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const response = yield fetch(url);
  const post = yield response.json();
  console.log(post);
});

function run(generator) {
  const iterator = generator();
  const iteration = iterator.next();
  const promise = iteration.value;
  promise.then(response => {
    const anotherIterator = iterator.next(response);
    const anotherPromise = anotherIterator.value;
    anotherPromise.then(y => iterator.next(y));
  });
}
