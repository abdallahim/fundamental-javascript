console.log("hello guys");

//ini adalah coment

/*
ini 
juga
coment
*/

// VARIABLE -> storage / penampungan data

// VARIABLE DECLARATION -> var, let, const

var person = "Budi";

console.log(person);

let person1 = "budi1";

person1 = "budi2"

let person2

console.log(person1)

const person3 = "Joko"

// person3 = "Siti" => gabisa

//Variable Naming
// must contain only letters, digits, or symbol "S" and "-"
// first character not digit
// case sensitive


//DATA TYPES
// primitive data types : string, number, boolean, null, undefinied
// non primitive data types : object & array

// string-> "",''
// number -> 1 2 3 4 1000
// boolean -> true & false
// null -> value = kosong belom diisi
// undefined -> variable tidak berisi / kosong

// imutable

let count1 = 4
let count2 = count1

count2 = 10

console.log(count1)
console.log(count2)

// mutable

let person7 = {
    name: "budi",}

let person8 = person7
person8.hobby = "Nonton"

console.log(person7)
console.log(person8)

// string build in method

const nama = "SiTi metal"
const nama2 = "bgt"

console.log(nama.toLowerCase())
console.log(nama.toLocaleUpperCase())

console.log(nama.replace("i","O"))
console.log(nama.replaceAll ("i","O"))
console.log(nama.split(""))
console.log(nama.split(" "))
console.log(nama.concat(nama2))
console.log(nama.slice(0,3))

// TEMPLATE LITERALS -> template strring

const nama3 = "jack"
const message = "welcome"

console.log(message + " " + nama3)
console.log(`${message} ${nama3}`)
console.log(`welcome ${nama3}`)

// Number build in method

const angka = 10
const angka2 ='2000'

console.log(angka.toString())
console.log(Number(angka2))
console.log(parseInt(angka2))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


// TYPE CONVERSION
// String conversion
console.log(String(123))

// numeric conversion

const num = "3" * 1

const num2 = "1"+ 1

console.log(num)
console.log(num2)

// Bolean conversion

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean())
console.log(Boolean(""))
console.log(Boolean("0"))
console.log(Boolean(" "))
console.log(Boolean("false"))

// DATE
const now = new Date()

console.log(now)

// get method
console.log(now.getFullYear())
console.log(now.getMonth() +1)
console.log(now.getDate())

// Set Method

now.setDate(34)
console.log(now)

// BASIC OPERATOR -> + , - , * , / , %, **

console.log(1+1)
console.log(2-1)
console.log(2*4)
console.log(4/2)
console.log(3%2)
console.log(3**2)

// MODIFY IN PLACE
// n = n=2

let n = 4
// n += 2
n = n+2
console.log(n)


// INCREMENT & DECREMENT

// let counter = 2

// counter++ //increment
// counter-- //decrement

// console.log(counter)

// POSTFIX & PREFIX

let counter = 2

console.log(counter++) //prefix
console.log(counter)

console.log(5=="5")
console.log(5==="5")

console.log(5!==5)





















