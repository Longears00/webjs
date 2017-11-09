
import fetch from 'node-fetch';

async function fetchUri() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}

const result = fetchUri();
console.log(result);
