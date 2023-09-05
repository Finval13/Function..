"use strict";

// Перше

// let minNum = function () {
//   let rez = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < rez) {
//       rez = arguments[i];
//     }
//   }
//   return rez;
// };

// console.log(minNum(16, 2, 22, 10));

// Друге;

// const odn = function () {
//   let rez = false;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[0] === arguments[i]) {
//       rez = true;
//     } else {
//       rez = false;
//     }
//   }
//   return rez;
// };

// console.log(odn(1, 2, 3, 1));

// Третє

// const isNumber = function (n) {
//   return !isNaN(n) && isFinite(n);
// };

// const sum = function (n) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (isNumber(arguments[i])) {
//       sum += arguments[i];
//     }
//   }
//   return sum;
// };
// console.log(sum(4, "ewqewq", 2));

// Четверте

// const maxslovo = function (str) {
//   let arrStr = str.split(" ");
//   let long = arrStr[0];
//   for (let i = 1; i < arrStr.length; i++) {
//     if (arrStr[i].length > long.length) {
//       long = arrStr[i];
//     }
//   }
//   return long;
// };
// console.log(maxslovo("ewqewqe ewqewq wqqqqqqqqqqqqqqq"));

// 2222222222

// перше

// const gen = function (start, end) {
//   let arr = [];

//   for (let i = start; i < end; i++) {
//     arr.push(i);
//   }
//   return arr;
// };
// const genrev = function (start, end) {
//   let arr = [];

//   for (let i = start; i < end; i++) {
//     arr.push(i);
//   }
//   return arr.reverse();
// };

// const rec = function (start, end) {
//   let num1 = prompt("Введіть перше число");
//   let num2 = prompt("Введіть друге число");

//   console.log(gen(num1, num2));
//   console.log(genrev(num1, num2));
//   rec();
// };

// rec();

// друге

// const pal = function (a) {
//   let s = prompt("Введіть число");
//   console.log(s.split("").reverse().join(""));
//   pal();
// };
// pal();

// третє

// const summa = function (y) {
//   let x = String(y);
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//   }
//   return sum;
// };

// const sx = function (e) {
//   let cf = prompt("Введіть число");
//   console.log(summa(cf));
//   sx();
// };

// sx();

// четверте

// const stup = function (a) {
//   a = a * a;
//   return a;
// };

// const rec = function () {
//   let numb = prompt("Введіть число яке потрібно привести у ступінь");
//   console.log(stup(numb));
//   rec();
// };
// rec();
