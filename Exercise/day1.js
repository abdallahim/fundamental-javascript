
// No 1
// Rectangle area formula : Area = length x width

let count1 = 5 // Length
let count2 = 3 // Width

// Area = 5 x 3

console.log(count1*count2)
// Area = 15



// No 2
// Perimeter of rectangle formula : P = 2(l+w)
// Perimeter = 
console.log(2*(count1+count2))
// Perimeter = 16



// No 3

// Diameter of circle formula : D=2r
let count3 = 5 //radius
// D = 
console.log(2*count3)
 D = 10

// circumference of circle formula : C= 3,14 x D
// C = 3.14 x 10 =
console.log(Math.PI*D)
C=31.4

// Area of circle formula : A = 3,14 x r x r
// A =
console.log(Math.PI*count3*count3)
// A = 78.5

// Diameter, Circumference, and Area of a circle
let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area_circle = Math.PI * (radius ** 2);
console.log("Diameter of the circle:", diameter);
console.log("Circumference of the circle:", circumference.toFixed(4));
console.log("Area of the circle:", area_circle.toFixed(3));


// No 4
// Total of Triangles : a + b + c = 180'
// a = 80 , b = 65, c = ?
let a = 80 //a
let b = 65 //b
// c = 180-(a+b) = 180-(80+65)
console.log(180-(a+b))




// No 5

// Difference between dates in days
// let date1 = new Date("2022-01-20");
// let date2 = new Date("2022-01-22");
// let difference = Math.abs(date2 - date1) / (1000* 60 * 60 * 24);
// console.log("Difference in days:", difference);


// Difference between dates in days
let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let differenceInMilliseconds = Math.abs(date2 - date1);
let millisecondsInADay = 1000 * 60 * 60 * 24;
let differenceInDays = differenceInMilliseconds / millisecondsInADay;
console.log("Difference in days:", differenceInDays);




// No 6


// Convert days to years, months, and days
let total_days = 400;
let years = Math.floor(total_days / 365);
let remaining_days = total_days % 365;
let months = Math.floor(remaining_days / 30);
let days = remaining_days % 30;
console.log(`${total_days} days is equal to ${years} year(s), ${months} month(s), and ${days} day(s)`);









