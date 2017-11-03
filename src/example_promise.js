
let myPromise = Promise.resolve('Foo');
myPromise.then((res)=>console.log(res));

let funPromise = new Promise((resolve, reject)=> {
  setTimeout(()=>resolve(4), 2000);
});

funPromise.then((res)=> {
  res += 3;
  console.log(res);
});

function getData(method, url) {
  return new Promise((resolve, reject)=> {
    let xhr =  new XMLHttpRequest();
    xhr.open(method);
    xhr.onload = () => {
          if (this.status >= 200) {
            resolve(xhr.response);
          }else {
            reject({ status: this.status });
          }

          xhr.onerror = ()=> {
            reject({ status: this.status });
          };
        };

    xhr.send();
  });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then((data)=> {    console.log(data);
}).catch((err)=> {
  console.log(err);
});
