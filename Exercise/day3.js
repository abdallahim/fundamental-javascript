// 1

const angka = 9;

for (let i = 1; i <= 10; i++) {
    console.log(`${angka} x ${i} = ${angka * i}`);
}


// 2

let str = "madam";

// Menghilangkan karakter non-alfanumerik dan mengubah string menjadi huruf kecil
let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// Membalikkan string yang sudah dibersihkan
let reversedStr = cleanedStr.split('').reverse().join('');

// Memeriksa apakah string asli yang sudah dibersihkan sama dengan string yang dibalik
let isPalindrome = cleanedStr === reversedStr;

console.log(`"${str}" : ${isPalindrome}`); 


// 3

const cm = 100000;

// Mengkonversi sentimeter ke kilometer
const km = cm / 100000;

console.log(`${cm} cm = ${km} km`); // Output: 

// 4

let number = 1000;

// Memformat angka menjadi mata uang Rupiah
let formattedNumber = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2
}).format(number);

console.log(formattedNumber);


// 5

// let string = "Hello world";
// let searchString = "ell";
// 
// Menghapus kemunculan pertama dari "search string"
// let index = string.toLowerCase().indexOf(searchString.toLowerCase());
// 
// if (index !== -1) {
    // let result = string.slice(0, index) + string.slice(index + searchString.length);
    // console.log(result); // Output: "o world"
// } else {
    // console.log(string); // Jika "search string" tidak ditemukan, tampilkan string asli
// }


// 6

let string = "hello world";

// Mengkapitalisasi huruf pertama dari setiap kata
let capitalizedString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(capitalizedString); // Output: "Hello World"


// 7

let string2 = "hello";

// Membalikkan string
let reversedString = string2.split('').reverse().join('');

console.log(reversedString); // Output: 

// 8

let string3 = "The QuiCk BrOwN Fox";

// Menukar huruf besar dan huruf kecil dari setiap karakter
let swappedCaseString = string3.split('').map(char => {
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }
}).join('');

console.log(swappedCaseString); // Output:


// 9


// let num1 = 42;
// let num2 = 27;
// 
// Menemukan bilangan terbesar dari dua bilangan yang diberikan
// let largest = Math.max(num1, num2);

// console.log(`Bilangan terbesar adalah: ${largest}`); // Output: "Bilangan terbesar adalah: 42"


// 10
let num1 = 42;
let num2 = 27;
let num3 = 18;

let sortedNumbers;

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        sortedNumbers = [num1, num2, num3];
    } else {
        sortedNumbers = [num1, num3, num2];
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        sortedNumbers = [num2, num1, num3];
    } else {
        sortedNumbers = [num2, num3, num1];
    }
} else {
    if (num1 <= num2) {
        sortedNumbers = [num3, num1, num2];
    } else {
        sortedNumbers = [num3, num2, num1];
    }
}

console.log(`Bilangan yang diurutkan adalah: ${sortedNumbers.join(', ')}`); // Output: "Bilangan yang diurutkan adalah: 18, 27, 42"


// 11

function identifyInputType(input) {
    if (typeof input === 'string') {
        return 1;
    } else if (typeof input === 'number') {
        return 2;
    } else {
        return 3;
    }
}

// Contoh penggunaan:
let input1 = "hello";
let input2 = 42;
let input3 = true;

console.log(identifyInputType(input1)); // Output: 1
console.log(identifyInputType(input2)); // Output: 2
console.log(identifyInputType(input3)); // Output: 3

// 12

let input = 'An apple a day keeps the doctor away';

// Mengganti setiap huruf 'a' atau 'A' dengan '*'
let output = input.replace(/a/gi, '*');

console.log(output); // Output: '*n *pple * d*y keeps the doctor *w*y'

