// EQUAL OPERATOR

const age = 18;
if (age === 18) console.log("You just became an adult (strict equal) ");

if (age == "18") console.log("You just became an adult (loosely equal) ");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 999) {
    console.log("YAY! 999 is amazing number")
} else if (favourite === 7) {
    console.log("YAY! 7 is also a good number choice")
} else if (favourite === 10) {
    console.log("YAY! 10 is also a good number choice")
} else {
    console.log("Number is not 999 or 7 or 10")
}

// DIFFERENT OPERATOR
if (favourite !== 999) console.log("Why not 999") 