// Question: 151
// class Animal {
//     static belly = [];

//     eat() {
//         Animal.belly.push('food');
//     }
// }

// let a = new Animal();
// a.eat();
// console.log(Animal.belly[0]);

// Question: 152
// let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];

// let removed = rainForests.splice(0, 2);
// console.log(removed)
// console.log(rainForests)


// Question: 154
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const obj2 = {
//     ...obj,
//     a: 'New Item'
// };

// console.log(obj2)


// Question: 137
// let animals = [{ type: 'lion' }, 'tiger'];
// let clones = animals.slice();

// clones[0].type = 'bear';
// console.log('animals', animals, 'clones', clones)

// Question: 136
// let cat = Object.create({ type: 'lion' });
// cat.size = 'large';

// let copyCat = { ...cat };
// cat.type = 'tiger';

// console.log(copyCat.type, copyCat.size);

// Queston: 127
// var thing;
// let func = (str = 'no args') => {
//     console.log(str);
// }

// func(thing);
// func(null);

// Question: 126
// var cat = { name: 'Athena' };

// function swap(feline) {
//     feline.name = 'Wild';
//     feline = { name: 'Tabby' };
// }

// swap(cat);
// console.log(cat)


// Questin: 125
// let bear = {
//     sound: 'roar',
//     roar() {
//         console.log(this.sound);
//     }
// }

// bear.sound = 'grunt';
// let bearSound = bear.roar();
// bearSound;


// Question: 118
// class RainForest {
//     static minimumRainFall = 60;

// }

// let congo = new RainForest();
// RainForest.minimumRainFall = 80;
// console.log(congo.minimumRainFall);


// Question: Question Number Undefined
// const myNumbers = [1, 2, 3, 4, 5, 6, 7];
// const myFunction = (arr) => {
//     return arr.map((x) => x + 3).filter((x) => x < 7);
// }
// console.log(myFunction(myNumbers))


// Question: 100
// var sound = 'grunt';
// var bear = { sound: 'roar' };
// function roar() {
//     console.log(this.sound);
// }
// roar.apply(bear);


// Question: 91
// 'use strict';
// function logThis() {
//     this.desc = 'logger';
//     console.log(this);
// }

// new logThis() // consoles: { desc: 'logger' }


// Question: 86
// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// var addFive = makeAdder(5);
// console.log(addFive(3))


// Question: 80
// class TaxCalculator {
//     static calculate(total) {
//         return total * 0.5;
//     }
// }

// console.log(TaxCalculator.calculate(50))


// Question: 76
// function logThis() {
//     console.log(this);
// }

// logThis();


// Question: 55
// function printA() {
//     console.log(answer);
//     var answer = 1;
// };

// printA();
// printA();


// Question: 52
// var start = 1;
// function setEnd() {
//     var end = 10;
// }
// setEnd();
// console.log(end); Consoles Reference Error


// Question: 34
// console.log(sum(10, 20));
// console.log(diff(10, 20));

// function sum(x, y) {
//     return x + y;
// }

// function diff(x, y) {
//     return x - y;
// }



// Question: 33
// class X {
//     get Y() {
//         return 42;
//     }
// }

// var x = new X();
// console.log(x.Y)


// Question: 11
// var Strom = function () { };
// Strom.prototype.precip = 'rain';

// var WinterStrom = function () { };
// WinterStrom.prototype = new Strom();
// WinterStrom.prototype.precip = 'snow';

// var bob = new WinterStrom();
// console.log(bob.precip)



var obj;
console.log(obj)