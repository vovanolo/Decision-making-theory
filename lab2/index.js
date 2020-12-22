const fs = require("fs");
const readMe = fs.readFileSync("db.txt", "utf8");

const matrix = readMe.split(" ");

let n = 5;

console.log(
  `M1 = ${matrix[0]}, D1 = ${matrix[1]}, P1 = ${matrix[2]}, D2 = ${matrix[3]}, P2 = ${matrix[4]}`
);

console.log(`Якщо P1 = ${matrix[2]}, то: `);

let aTrue = matrix[1] * n - matrix[0];

const vidsotok = 100 / n;

console.log(
  `Чистий прибуток за ${n} років становить ${aTrue} тисяч. Це ${
    aTrue / n
  } тисяч в рік, або ${vidsotok}% річних.`
);

console.log(`Якщо P2 = ${matrix[4]}, то: `);

let aFalse = matrix[3] * n;

console.log(`Збитки за ${n} років будуть становити ${aFalse} тисяч. Це ${
  matrix[3]
} тисяч в рік.
Сума збитків за ${n} років з ціною заводу становить -${
  Math.abs(aFalse) + Number(matrix[0])
} тисяч.`);

// 2

console.log(
  `M2 = ${matrix[5]}, D1 = ${matrix[6]}, P1 = ${matrix[7]}, D2 = ${matrix[8]}, P2 = ${matrix[9]}`
);

console.log(`Якщо P1 = ${matrix[7]}, то: `);

let bTrue = matrix[6] * n - matrix[5];

console.log(
  `Чистий прибуток за ${n} років становить ${bTrue} тисяч. Це ${
    bTrue / n
  } тисяч в рік, або ${vidsotok}% річних.`
);

console.log(`Якщо P2 = ${matrix[9]}, то: `);

let bFalse = matrix[8] * n; // ---- Збитки за n років

console.log(`Збитки за ${n} років будуть становити ${bFalse} тисяч. Це ${
  matrix[8]
} тисяч в рік.
Сума збитків за ${n} років з ціною заводу становить -${
  Math.abs(aFalse) + Number(matrix[5])
} тисяч.`);

///// вибір кращого сценарія:

let aVidsotkiv = (aTrue * 100) / matrix[0]; // ---- Прибуток в відсотках від вартості заводу

let bVidsotkiv = (bTrue * 100) / matrix[5];

function abVidsotok(aVidsotkiv, bVidsotkiv) {
  if (aVidsotkiv > bVidsotkiv) {
    console.log(
      `Кращий варіант А. Прибуток при ціні заводу - 100% дорівнює: ${aVidsotkiv}%`
    );
  } else if (aVidsotkiv < bVidsotkiv) {
    console.log(
      `Кращий варіант Б Прибуток при ціні заводу - 100% дорівнює: ${bVidsotkiv}%`
    );
  } else {
    console.log("Два варіанти хороші (А = Б)");
  }
}
abVidsotok(aVidsotkiv, bVidsotkiv);

console.log(
  `P3 = ${matrix[10]}, P4 = ${matrix[11]}, P1 = ${matrix[12]}, P2 = ${matrix[13]},`
);

n = 4;

console.log(`Збір інформації ще один рік, n = ${n} `);

aTrue = matrix[1] * n - matrix[0];
bTrue = matrix[6] * n - matrix[5];

aVidsotkiv = (aTrue * 100) / matrix[0];
bVidsotkiv = (bTrue * 100) / matrix[5];
abVidsotok(aVidsotkiv, bVidsotkiv);
