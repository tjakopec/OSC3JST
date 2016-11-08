"use strict";



function MyPromise(exec) {
  var promise = new Promise(exec);
  Object.setPrototypeOf(promise, MyPromise.prototype);
  // ...
  return promise;
}
Object.setPrototypeOf(MyPromise, Promise);
MyPromise.prototype = Object.create(Promise.prototype, {
  constructor: { value: MyPromise }
});

