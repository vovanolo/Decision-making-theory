const fs = require("fs");
const readMe = fs.readFileSync("db.txt", "utf8");

const matrix = readMe.split(" ");

// Лапласа
console.log("Завдання варіанту:");
console.log(matrix);
console.log("Обрахунок методом Лапласа: ");

const stan = 0.33;
let vutratu = [];
let formula1;

for (let i = 0; i < matrix.length; i += 3) {
  formula1 =
    stan * (Number(matrix[i]) + Number(matrix[i + 1]) + Number(matrix[i + 2]));
  vutratu.push(formula1);
}

console.log(`Значення для кожної строки матриці: ${vutratu}`);

let min = Math.min(...vutratu);

console.log(`Мінімальне значення = ${min}`);

let laplas = [];

if (min === vutratu[0]) {
  for (let i = 0; i < 3; i++) {
    laplas.push(matrix[i]);
  }
} else if (min === vutratu[1]) {
  for (let i = 3; i < 6; i++) {
    laplas.push(matrix[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    laplas.push(matrix[i]);
  }
}
console.log(`Найкращі значення у рядку: ${laplas}`);

// Вальда

console.log("Метод Вальда: ");

let maxValda1 = [];
let maxValda2 = [];
let maxValda3 = [];

for (let i = 0; i < matrix.length; i++) {
  if (i === 0 || i === 1 || i === 2) {
    maxValda1.push(matrix[i]);
  } else if (i === 3 || i === 4 || i === 5) {
    maxValda2.push(matrix[i]);
  } else {
    maxValda3.push(matrix[i]);
  }
}

let maxNumValda = [];
maxNumValda.push(Math.max(...maxValda1));
maxNumValda.push(Math.max(...maxValda2));
maxNumValda.push(Math.max(...maxValda3));

console.log(`max a ij =  ${maxNumValda}`);

let minVald = Math.min(...maxNumValda);
const vald = [];

console.log(`min (max a ij) = ${minVald}`);

if (minVald === maxNumValda[0]) {
  for (let i = 0; i < 3; i++) {
    vald.push(matrix[i]);
  }
} else if (minVald === maxNumValda[1]) {
  for (let i = 3; i < 6; i++) {
    vald.push(matrix[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    vald.push(matrix[i]);
  }
}
console.log(`Найкращі значення методом Вальда у рядку: ${vald}`);

//Гурвіца
const a = 0.5;

console.log("Методом Гурвіца: ");

let minNumGurv = [];

minNumGurv.push(Math.min(...maxValda1));
minNumGurv.push(Math.min(...maxValda2));
minNumGurv.push(Math.min(...maxValda3));

console.log(`Максимальні значення у рядках ${maxNumValda}`);
console.log(`Мінімальні значення у рядках ${minNumGurv}`);

let massGurvica = [];

massGurvica.push(a * Number(minNumGurv[0]) + (1 - a) * Number(maxNumValda[0]));
massGurvica.push(a * Number(minNumGurv[1]) + (1 - a) * Number(maxNumValda[1]));
massGurvica.push(a * Number(minNumGurv[2]) + (1 - a) * Number(maxNumValda[2]));

console.log(`Значення Гурвіца для кожного рядка: ${massGurvica}`);

console.log(`Найркаще значення методом Гурвіца: ${Math.min(...massGurvica)}`);

let minGurv = Math.min(...massGurvica);
let gurv = [];

if (minGurv === massGurvica[0]) {
  for (let i = 0; i < 3; i++) {
    gurv.push(matrix[i]);
  }
} else if (minGurv === massGurvica[1]) {
  for (let i = 3; i < 6; i++) {
    gurv.push(matrix[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    gurv.push(matrix[i]);
  }
}

console.log(`Найкращі значення методом Вальда у рядку: ${gurv}`);

//Байеса - Лапласа
const p1 = 0.5;
const p2 = 0.35;
const p3 = 0.15;
console.log(
  `Метод Байеса - Лапласа при значенню p1 = ${p1}, p2 = ${p2}, p3 = ${p3}`
);
let bayes = [];

for (let i = 0; i < matrix.length; i += 3) {
  bayes.push(
    Number(matrix[i]) * p1 +
      Number(matrix[i + 1]) * p2 +
      Number(matrix[i + 2]) * p3
  );
}
console.log(`Значення Байеса в кожному рядку ∑(an,j p j) = ${bayes}`);

console.log(`Найкраще значення методом Байеса: ${Math.max(...bayes)}`);

let maxBayes = Math.max(...bayes);
let resBayes = [];

if (maxBayes === bayes[0]) {
  for (let i = 0; i < 3; i++) {
    resBayes.push(matrix[i]);
  }
} else if (maxBayes === bayes[1]) {
  for (let i = 3; i < 6; i++) {
    resBayes.push(matrix[i]);
  }
} else {
  for (let i = 6; i < 9; i++) {
    resBayes.push(matrix[i]);
  }
}

console.log(`Найкращі значення методом Байеса у рядку: ${resBayes}`);
