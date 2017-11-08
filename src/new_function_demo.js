function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
    console.log('i say ', this.saying);
  };

function Girl(saying) {
  this.saying = saying;
}

Girl.prototype.like = function () {
    console.log('like animal');
  };

Object.setPrototypeOf(Girl, Person);

var crockford = new Person('semi');
crockford.talk();

/*new dows:
*1 创建新的object 对象
*2 发现person 找 prototype set the prototype
*3 construction 构造 并且传入当前对象的this 也就是上面代码上
*的crockford的this
*4 return object
*/
