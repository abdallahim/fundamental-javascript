// IF Statement
// syntax
// if (condition)

const age = 18;
if (age >= 17) {
  console.log("anda bisa buat ktp");
}

// ELSE STATEMENT ===================

const age2 = 15;
if (age2 >= 17) {
  console.log("anda bisa buat ktp");
} else {
  console.log("anda Bocil");
}

// ELSE IF STATEMENT ========

const skor = 85;

if (skor >= 90) {
  console.log("Nilai Anda A.");
} else if (skor >= 80) {
  console.log("Nilai Anda B.");
} else if (skor >= 70) {
  console.log("Nilai Anda C.");
} else {
  console.log("Nilai Anda di bawah C.");
}

let nilai = "A";

nilai = nilai.toLowerCase(); // Ubah nilai menjadi huruf kecil

if (nilai === "a") {
  console.log("Nilai Anda sangat baik.");
} else if (nilai === "b") {
  console.log("Nilai Anda baik.");
} else if (nilai === "c") {
  console.log("Nilai Anda cukup.");
} else if (nilai === "d") {
  console.log("Nilai Anda kurang.");
} else {
  console.log("Nilai Anda sangat kurang.");
}

// SWITCH CASE

let hari = 7;
let namaHari;

switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  case 7:
    namaHari = "Minggu";
    break;
  default:
    namaHari = "Tidak valid";
}

console.log("Hari ini adalah " + namaHari);

// Truthy and falsy Values

// LOGICAL OPERATOR ===============================
// && -> and
// || -> or
// ! -> not

// OR
const car = "mercy";

if (car === "bmw" || car == "mercy") {
  console.log("mobil jerman");
} else {
  console.log("mobil jepang");
}

// AND
const umur = "18";
const punyaSIM = true;

if (umur >= 18 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

//  NOT -> membalikan nilai boolean

const isSunny = true;
const isRaining = !isSunny;

console.log(isSunny);
console.log(isRaining);

// TERNARY OPERATOR =========================
// SHORTCUT UNTUK IF ELSE CONDITION

const str = "javascript";

if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

//
console.log(str === "javascript" ? "javascript" : "not javascipt");

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

// LOOP STAETEMENT -> perulangan
// rangkaian instruksi yg dilakukan berulangkalo hingga kondisinya tidak terpenuhi
// type loop : for loop, while loop, do while loop

// syntax : for(statement1;satement2;statement3)

for (let i = 0; i < 3; i++) {
  console.log("hello world");
}

// WHILE LOOP ==========================

let i = 11;

while (i < 10) {
  console.log("hello world");
  i++;
}

// DO WHILE LOOP

let count = 1;

do{
    console.log("ini iterasi ke : " + count);
    count++
} while (count<-5)

// BREAK======================
// Untuk menghentikan loop

let sum = 0
while (true) {
    console.log("sum : " + sum);
    if(sum>=5) break
    
    sum += 1
}
 
//  CONTINUE =========================
// melakukan skip pada looping

for (let i=0;i<5;i++){
    if (i === 3) continue

    console.log("i=" + i);
}
