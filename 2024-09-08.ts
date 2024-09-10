export {};
import Prompt from "prompt-sync";
const input = Prompt({sigint: true});

// play mario 
// https://supermario-game.com/


/////////// print statements ///////////
// console.log("hello shuhua !");


// console.log("hi!");
// console.log("goodbye!");


// print a 3x3 grid
// console.log("x|_|o");
// console.log("_|o|_");
// console.log("x| |o");



// print a 3x3 grid, with some tic tac toe being played


/////////// variables - strings ///////////
// let a = "shuhua";
// let b = "serai";
// console.log(a);
// console.log("hello", a);


// say shuhua 10 times in a single line
// console.log(a , a , a , a , a , a , a , a , a , a);



// say shuhua 10 times vertically
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);




// say shuhua serai 5 times in a single line
// console.log(a , b , a , b , a , b , a , b , a , b);


// say shuhua, then serai, 5 times vertically
// console.log(a);
// console.log(b);
// console.log(a);
// console.log(b);
// console.log(a);
// console.log(b);
// console.log(a);
// console.log(b);
// console.log(a);
// console.log(b);



// variables can be reassigned
// let a = "shuhua";
// console.log(a);
// a = "kelly";
// console.log(a);


/////////// adding strings ///////////
// let a = "shuhua";
// let b = "serai";
// console.log(a + b);

// console.log(a + " and " + b);


// // print out month, date, and year formatted
// let day = "8";
// let month = "9";
// let year = "2024";
// console.log(year + "-" + month + "-" + day);


/////////// inputs ///////////

// let n = input("type something: ")
// console.log(n);


// ask for my name, and say hi to me
// let a = input("what's your name?: ");
// console.log("hi", a + "!");

// ask for my first name, last name, date of birth,
// month, and year,
// then say "<name> was born on <month date year>"
let firstName = input("what's your first name?: ")
let lastName = input("what's your last name?: ")
let date = input("when's your date of birth?: ")
let month = input("what month?: ")
let year = input("what year?: ")
console.log(firstName + " " + lastName , "was born on" , month + "-" + date + "-" + year);


/////////// variables - numbers ///////////
// let a = 5;
// let b = 4;
// console.log(a + b);


// operators: + - * / %
// do the problems in "number problems.png"



// what's the remainder of 534 dividing 7?



// how to make 5 + 4 be 54? there are 2 ways!
// let a = 5;
// let b = 4;
// console.log(a + b);




/////////// variables - booleans ///////////
// let a = true;
// let b = false;
// console.log(a);
// console.log(b);


// Calculating booleans using comparisons
// let a = 5;
// let b = 4;
// let c = 1;

// console.log(a == a);
// console.log(a == b);
// console.log(a == b + c);

// console.log(a != a);
// console.log(a != b);
// console.log(a != b + c);

// console.log(a > b);
// console.log(b > a);
// console.log(a > b + c);
// console.log(a >= b + c);
// console.log(a <= b);
// console.log(a <= b + c);

// assigning booleans to variables
// let d = a == a;
// console.log(d);
// d = a == b;
// console.log(d);
// d = a == b + c;
// console.log(d);
// d = a != b + c;
// console.log(d);


/////////// if statements ///////////
// let a = 5;
// let b = 1;
// if (a > b) {
//     console.log("a is bigger than b");
// }
// console.log("code is done running.")



// print the absolute value of a
// let a = -565;


// print the max of a and b
// let a = 5;
// let b = 34;


/////////// boolean and ///////////
// let a = true;
// let b = true;
// console.log(a && b);



// Serai goes shopping, she wants to buy things that are balloons or things that are red
// True or false, will Serai buy the following:
// a blue balloon
// a red pen
// a red balloon
// a blue pen

// Kelly goes shopping. She wants to buy things that are balloons and are red
// True or false, will Kelly buy the following:
// a blue balloon
// a red pen
// a red balloon
// a blue pen

// Shuhua goes shopping. She wants to buy things that are balloons or things that are not red
// True or false, will Shuhua buy the following:
// a blue balloon
// a red pen
// a red balloon
// a blue pen

// Ms.Clara goes shopping. She wants to buy things that are balloons and are not red
// True or false, will Ms.Clara buy the following:
// a blue balloon
// a red pen
// a red balloon
// a blue pen


// // use case - users and passwords
// let user = "shuhua";
// let password = "abcde";
// if (user == "shuhua" && password == "abcde") {
//     console.log("hello shuhua");
// } else if (user == "serai" && password == "12345") {
//     console.log("hello serai");
// } else {
//     console.log("we don't know you");
// }


// do the previous code, but input the user and password


// do the previous code, input the user and password,
// and tell me how much money I have in my account.
// let shuhuaMoney = 120;
// let seraiMoney = 26;



// write rock paper scissors
// let player1 = "rock"
// let player2 = "scissors"




/////////// while loops ///////////
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i = i + 1;
// }

// loop from 0 to 99

// loop from 1 to 100

// loop from 0 to 100, only even numbers

// loop forever

// loop from 100 to 0


// loop from 1 to 100, but ignore numbers that are
// multiples of 5


// loop from 1 to 100, and for the numbers that are
// divisible by 7, draw an arrow to it and say so


// loop from 1 to 100, and tell me whether each number
// is even or odd


// print:
//   duck
//   duck
//   goose
// n times


// print all the even numbers from 100 to 1 backwards


// add up all the numbers from 1 to 100


// create multiplication, without using *


// create division, without using /


// create remainder, without using %


// make a stopwatch, with minutes and seconds


// create a string of aaaaaaaa using loops


// say shuhua-shuhua... 10 times


// say lololol....., 100 times



// keep asking me for a number until I input an even
// number



// create a password checker, where you keep asking
// me for a password until I get it right, then log
// me in


// play best 3 out of 5 rock-paper-scissors



// calculate the Fibonacci sequence



// calculate interest rate



// How many times would you have to fold a piece of paper in half for it to reach the Moon?
// distance between earth and moon is 384,000km
// a paper is 0.01cm thick


// draw a diagonal line with #, with length n




// draw a diagonal line with #, with length n,
// going the other way


// print true if n is prime, false otherwise
// let n = 54;

