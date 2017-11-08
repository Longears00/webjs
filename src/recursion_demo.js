
let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);
    countDownFrom(num - 1);
  };

// countDownFrom(10);

let plusDowmFrom = (sum, num) => {
    if (num === 0) return sum;
    sum += num;
    return plusDowmFrom(sum, num - 1);
  };

console.log(plusDowmFrom(0, 3));

let categories = [
    { id: 'animals', parent: null },
    { id: 'mamal', parent: 'animals' },
    { id: 'cats', parent: 'mamal' },
    { id: 'dogs', parent: 'mamal' },
    { id: 'chihuahua', parent: 'dog' },
    { id: 'labrador', parent: 'dog' },
    { id: 'persian', parent: 'cat' },
    { id: 'cookie', parent: 'cat' },
];

let makeTree = (cat, parent)=> {
    let node = {};
    cat.filter(c => c.parent === parent).forEach(c=> {
        node[c.id] = makeTree(cat, c.id);
      });
    return node;
  };

console.log(JSON.stringify(makeTree(categories, null)));
