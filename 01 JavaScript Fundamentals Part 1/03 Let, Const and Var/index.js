// FOR COURSE NOTES VISIT
// Link: https://vijayrajputhp.wordpress.com/2023/12/08/let-const-and-var/

// when we want to mutate (change) the value then we use let
// let age = 30;
// age = 31;

// We use const to declare variable when we don't want to change its value at any point.We cannot declare empty const variable.
// const birthYear = 2000;
//

// BASIC OPERATORS
// const currentYear = 2023;
// const ageVijay = currentYear - 2000;
// const ageRama = currentYear - 1989;
// console.log(ageVijay, ageRama);

// console.log(ageVijay * 2, ageRama / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

// const firstName = "ram";
// const lastName = "charan";
// console.log(firstName + " " + lastName)
// console.log(typeof firstName)

// ASSIGENMENT OPERATOR
// let x = 10 + 10; // asign
// x += 10;  // x = x+10 = 30
// x *= 10; // x = x*10 =300
// x++;      // x = x+1 = 301
// x--;   // x = x-1 = 300
// console.log(x)

// COMPARISON OPERATORS
const currentYear = 2023;
const ageVijay = currentYear - 2000;
const ageRama = currentYear - 1989;
console.log(ageVijay > ageRama); // < , > , <= , >=
console.log(ageVijay >= 18);

console.log(currentYear - 1991 > currentYear - 1989);

//  Here's a link for mdn refference to know about Operator_precedence = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
