// 1

const celcius = 60
const Fahrenheit = (celcius * 9/5) + 32
console.log(Fahrenheit);



// 2
const angka1 = 25;
const angka2 = 2;

if (angka1 % 2 === 0) {
  console.log(`${angka1} adalah bilangan genap.`);
} else {
  console.log(`${angka1} adalah bilangan ganjil.`);
}

if (angka2 % 2 === 0) {
  console.log(`${angka2} adalah bilangan genap.`);
} else {
  console.log(`${angka2} adalah bilangan ganjil.`);
}



// 3






// 4

const N1 = 5;
let jumlah1 = 0;
for (let i = 1; i <= N1; i++) {
  jumlah1 += i;
}
console.log(`${N1} → ${jumlah1}`);

const N2 = 3;
let jumlah2 = 0;
for (let i = 1; i <= N2; i++) {
  jumlah2 += i;
}
console.log(`${N2} → ${jumlah2}`);



// 5

const angka = 4;
let faktorial = 1;
for (let i = angka; i > 1; i--) {
  faktorial *= i;
}
console.log(`${angka}! → ${faktorial}`);

const angka6 = 6;
let faktorial6 = 1;
for (let i = angka6; i > 1; i--) {
  faktorial6 *= i;
}
console.log(`${angka6}! → ${faktorial6}`);


// 6

const N = 15;
const fib = [1, 1];

// Menghitung deret Fibonacci hingga elemen ke-N
for (let i = 2; i < N; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}

// Menampilkan keseluruhan deret Fibonacci
console.log(`Deret Fibonacci pertama hingga ke-${N}: ${fib.join(', ')}`);

// Elemen ke-N dalam deret Fibonacci adalah elemen pada indeks N-1
console.log(`Bilangan Fibonacci ke-${N} adalah ${fib[N - 1]}`);