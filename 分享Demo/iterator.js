
var iterableArr = [1, 2];
 
var iterator = iterableArr[Symbol.iterator]();
 
iterator.next(); // => { value: "1", done: false}
iterator.next(); // => { value: "2", done: false}
iterator.next(); // => { value: undefined, done: true}

// rxjs：https://jsbin.com/qumidet/edit?html,js,console,output
var numbers = Rx.Observable.of(10, 20, 30);
numbers.subscribe(x => console.log(x));