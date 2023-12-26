const fullName = "Vijay Kumar";
const job = "student";
const currentYear = 2023;
const birthYear = 2000;
const myAge = currentYear - birthYear;
// before string template
const vijay = "i'm " + fullName + ", a " + (currentYear - birthYear) + " years old " + job + "!";
console.log(vijay);

// how to write using string template literal
const vijayNew = `i'm ${fullName}, a ${myAge} years old ${job}!`;
console.log(vijayNew);

console.log(`this is a example that we can use backtick for writing string`)

// before string template
console.log("string with \n\
multiple\n\
lines");
// how to write using string template literal
console.log(`hello this 
is another example
of multiple lines strings
but using string template 
`);