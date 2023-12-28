
//type conversion

const inputYear = "1991";
// here 1991 is a string type not a number type
console.log(inputYear + 19);
// So this concatenation will not we resulted as needed becouse there are two different types of data
console.log(Number(inputYear) + 15) //Converting strings to a number
// in this we used pre defined function of JS to change data type into number

console.log(Number("vijay"));
//this will return NaN (not a number or invalid number), becouse when we try to convert data to a number type which is not possible we get NaN.

console.log(String(23)); //to change number to string


// type coercion
console.log("i'm " + 23 + " years old"); // + operators converts all number to strings automatically
console.log("23" - "10" - 10); // - operators converts all strings to number automatically
console.log("23" * "10" * "10"); // * operators converts all strings to number automatically, same goes for divide / 

//TRUTHY SND FALSY
console.log(Boolean(0));  //falsy
console.log(Boolean(20)); //truthy
console.log(Boolean(undefined)); //falsy
console.log(Boolean("vijay")); //truthy
console.log(Boolean({})); // truthy
console.log(Boolean("")); //falsy

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You doing great");
}