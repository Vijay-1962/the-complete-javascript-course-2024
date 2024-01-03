// AND OPERATOR &&
// const hasGoodVision = true;
// const hasDrivingLicence = true;
// console.log(hasDrivingLicence && hasGoodVision);
// result of true and true is true [&&=and operator]

// const hasGoodVision = true;
// const hasDrivingLicence = false;
// console.log(hasDrivingLicence && hasGoodVision);
// result of true and false is false [&&=and operator]

//OR OPERATOR ||
const hasGoodVision = true;
const hasDrivingLicence = true;
console.log(hasDrivingLicence || hasGoodVision);
//  result of true or false is true 
console.log(!hasDrivingLicence);
// NOT OPERATOR inverts the result

// const shouldDrive = hasDrivingLicence && hasGoodVision;
// if (hasDrivingLicence && hasGoodVision) {
//     console.log("Sarah is able to drive don't worry 😃");
// } else {
//     console.log("Someone else should drive 😃");
// }

const isTired = false;
console.log(hasDrivingLicence || hasGoodVision || isTired); //Result will be true
console.log(hasDrivingLicence && hasGoodVision && isTired); //Result will be false

if (hasDrivingLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive don't worry 😃");
} else {
    console.log("Someone else should drive 😃");
}