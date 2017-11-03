
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value  = 'hellow';

var lastChild = document.querySelector('.list-group-item:last-child');
lastChild.style.color = 'blue';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}

var itemLists = document.querySelector('#items');
itemLists.parentNode.style.backgroundColor = '#f4f4f4';

itemLists.lastElementChild.textContent = 'hello 4';
itemLists.lastElementChild.style.backgroundColor = 'yellow';

//nextSibling
itemLists.previousElementSibling.style.color = 'green';

//create a div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'hello div');

var newDivText = document.createTextNode('hello world');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

//event click
// var btn = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e) {
//   console.log(e.type);

//   //actually position on target
//   console.log(e.offestX);

//   //key is push down
//   console.log(e.altKey);
// }

//mouse event
var box = document.getElementById('box');

// btn.addEventListener('click', runEvent);
// btn.addEventListener('dbClick', runEvent);
// btn.addEventListener('mousedown', runEvent);
//btn.addEventListener('mouseup', runEvent);
box.addEventListener('mousemove', runEvent);
function runEvent(e) {
  let offsetx = e.offsetX;
  let offsety = e.offsetY;
  console.log('rgb(${offsetx},${offsety},40)');
  box.style.backgroundColor = 'rgb(${offsetx},${offsety},40)';
}

//key event
var itemInput = document.querySelector('input[type="text"]');

itemInput.addEventListener('keydown', runKeyEvent);

function runKeyEvent(e) {
  console.log(e.target.value);
}

var select = document.querySelector('selector');
select.addEventListener('change', runChangeEvent);

function runChangeEvent(e) {
  e.preventDefault();
  console.log(e.target.value);
}
