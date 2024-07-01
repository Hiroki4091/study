"use strict";
const userName = "max";
let age = 30;
const add = (a, b) => a + b;
const printOutput = (output) => {
    console.log(output);
};
printOutput(add(2, 5));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        console.log(event);
    });
}
