// 1. feladat

// String:
let a = 'szoveg';

// Number
let b = 5;

// Boolean
let c = true;

// 3. feladat

const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

/* let array = [1, 2, 3, 4, 5];
console.log(sumArray(array));
 */

// 4. feladat

const countArray = (array) => {
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    n++;
  }
  return n;
};

/* Ellenőrzés
let array = [1, 2, 3, 4, 5];
console.log(countArray(array)); */

// 5. feladat

const switchIt = (a) => {
  switch (a) {
    case 1:
      console.log('Kiselefánt');
      break;
    case 2:
      console.log('Kiscica');
      break;
    case 3:
      console.log('Kiskutya');
      break;
    default:
      console.log('Nem nyert!');
  }
};

/* Ellenőrzés
switchIt(1);
switchIt(2);
switchIt(3);
switchIt(4); */

// 6. feladat
const metszet = (a, b) => {
  let m = [];
  let n = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        m[n] = b[j];
        n++;
      }
    }
  }
  return m;
};

/* Ellenőrzés
a = [1, 2, 3, 4, 5];
b = [3, 4, 5, 6, 7];

console.log(metszet(a, b)); */

// 7. feladat
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

/* console.log(add(4, 2));
console.log(sub(4, 2));
console.log(mul(4, 2));
console.log(div(4, 2));
 */

module.exports = {
  add,
  sub,
  mul,
  div
};

// 8. feladat

let readlineSync = require('readline-sync');
let n = readlineSync.question('Kérek egy számot! ');
let m = readlineSync.question('Kérek még egy számot! ');
const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

let arr = generate2d(n, m);

const fill2d = (arr) => {
  let r = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.pow(2, r);
      r++;
    }
  }
  return arr;
};

arr = fill2d(arr);
console.log(arr);
