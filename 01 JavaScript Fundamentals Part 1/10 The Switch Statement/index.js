// const day = "thursday";

// switch (day) {
//     case "monday":
//         console.log("Plan course structure");
//         console.log("Go to coding meet-up");
//         break;
//     case "tuesday":
//         console.log("YAY! its tuesday");
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//         console.log("YAY! its wednesday");
//         console.log("Write code examples");
//         break;
//     case "thursday":
//         console.log("YAY! its thursday");
//         console.log("write code tutorials");
//         break;
//     case "friday":
//         console.log("YAY! its friday");
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Prepare for weekend");
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("not a valid day !")
// }


// doing same thing in if else statement
const day = "saturday";

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meet-up");
} else if (day === "tuesday") {
    console.log("YAY! its tuesday");
    console.log("Prepare theory videos");
} else if (day === "wednesday") {
    console.log("YAY! its wednesday");
    console.log("Write code examples");
} else if (day === "thursday") {
    console.log("YAY! its thursday");
    console.log("write code tutorials");
} else if (day === "friday") {
    console.log("YAY! its friday");
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Prepare for weekend");
    console.log("Enjoy the weekend");
} else {
    console.log("not a valid day !")
}