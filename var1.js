/*Write a program to take three variables to store your birth date, birth month, and birth year, respectively,
 and then print them one by one in a specified order.*/


const input = require("readline-sync");

let d = input.questionInt("enter the value of date :");
let m = input.questionInt("enter the value of month:");
let y = input.questionInt("enter the value year :");

console.log("birthday date",d);

console.log("birthday month ", m);

console.log("birthday year ",y);