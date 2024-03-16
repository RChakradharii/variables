/*Write a program to take two values from the user and swap them.*/ 

const input = require("readline-sync");
let a = input.questionInt("Enter the 1 number:");
let b = input.questionInt("Enter the 2 number: ");
let t;
t = a;
a = b;
b = t;

console.log(a,b);

