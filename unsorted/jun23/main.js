// // let user = new Object();
// let user_2 = {};
// //swrapi
// let user = {
//   name: "John",
//   age: 33
// }

// user_2.name = "user 2";
// user_2.age = 30;


// // delete user.age;
// // console.log(user.name, user['age']);

// // let key = prompt("enter key:", 'name');

// // alert(user[key]);

// user.isAdmin = true;
// Object.defineProperty(user, "lastname", {value: 'Doe', writable: false, configurable: false, enumerable:false 
// })
// user.lastname = "smith";
// delete user.lastname;
// // console.log(user.lastname);

// // Object.defineProperties(user_2 {
// //   name: {value: "test", writable: false},
// //   lastname: {value: "test", writable: false}
// // })

// // defaul all are true
// // 4 saerto property
// // value
// // writable
// // enumerable
// // configurable
// let speed = 300;
// let color = "black";
// let year = 2018;
// let car = {
//   // speed,
//   color,
//   year,
//   engine: 6.3,
//   beep() {
//     alert("pipipip");
//   }
// }
// // Object.defineProperty(car, 'speed', {
// //   value: speed,
// //   // enumerable: false
// // });
// // // console.log('age' in car);

// // for (let key in car) {
// //   console.log(`key: ${key}`, `value: ${car[key]}`)
// // }

// const myConst = {
//   name: "const"
// }

// myConst.new = 'new';
// // clone object
// let clone = Object.assign({}, user);
// console.log(user, clone);

// user.sayHi = function (params) {
//   alert(this.name);
// }

// user.sayHi();

// car.beep();

// function blaBla() {
//   alert(this);
// }

// let userV2 = {
//   name: "javascript",
//   sayHi() {
//     let func = () => alert(this.name);
//     func();
//   }
// }

// userV2.sayHi();

// function greet() {
//   alert(this.name);
// };
// function say(time, phrase) {
//   alert(`[${time}] ${this.name}: ${phrase}`);
// }
// let client = {name: 'client'};
// let admin = {name: 'admin'};
let john  = {name: 'John'}

// greet.call(client);
// greet.call(admin);

// say.call(john, '10:00', 'hello');
// let message = ['11:00', 'hiii'];

// say.call(john, message);


let id = Symbol('id');
let id1 = Symbol('id');

john[id] = 'ID Value';
console.log(john[id]);

for(let key in john) {
  console.log(key);
}

let customer = {
  name: 'Super',
  [id]: 140 // 'id' => 140
}

//constructor
// function User(nameInput) {
//   //this => {}
//   this.name = nameInput;
//   this.isAdmin = false;
//   this.hello = function() {
//     alert(`My name is: ${this.name}`)
//   }
// }

// let conUser = new User("new user");

// console.log(conUser);
// conUser.hello();
let num = 5;
let single = 'single';
let double = "double";

let backticks = `backticks`;

console.log()

