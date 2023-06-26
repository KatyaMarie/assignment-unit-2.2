// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

//🫡 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

// 👩🏽‍💻 CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/


// 🤭🌟
// 1. WRITE YOUR DESCRIPTION HERE
// We initialize a string variable called 'name' and give it the value 'Katya'
// We establish a conditional statement: if name (variable) is === to the string 'Mary'
// <In this If Statement, we are using a strict equality comparison, which will return true 
// if only both type and value are the same, there is no type coersion.>
// variable 'Katya' is tested in the IF statement below, Katya fails to meet the strict equality 
//operator when compared to 'Mary'. Therefore the console.log in the else stament will only execute
//console.log will return the message "How do you do?". 
//<Katya will not receive a message intended for Mary, "Hi,Mary!" this console.log is not executed, no message returned or displayed>


// 👩🏽‍💻 CODE
/*
let name = 'Katya';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/


// 🤭🌟
// 2. WRITE YOUR DESCRIPTION HERE
// a variable called secret is declared (no value or type is given to secret quite yet)
// a variable called code is declared and it is assigned an integer value of 123. 
// < we can complete math functions with numbers / number types in JS >
// we create a conditional statement to see if the variable for code is (====) 123.
// <In this If Statement, we are using a strict equality comparison, which will return true 
// if only both type and value are the same, there is no type coersion.>
// 123 is the same type and value! the code inside the first If statement will execute / run
// secret was declared above, outside of the If statement and inside the If statement is given a string type 
//with the value 'super' . . code is also reassigned the value of code * 2, OR simply put here, 246 (123 * 2) 
// we create another conditional If statement: If variable code is greater than 250, please run the code inside
//the value of code is 246 after the first If loop, so the line of code in the next If statement does not run
// console.log(secret);* (there is a syntax error for console.log to function properly) 
//the value / message that the variable secret would display is 'super', assigned in the first If statement.


// 👩🏽‍💻 CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/



// 🤭🌟 paraphrazing for accessibility  
// 3. WRITE YOUR DESCRIPTION HERE
// initializing variables: 
//   > variable isStudent assigned boolean type, value true 
//      > variable age is assigned number type, value 34 
//             >variable zip is assigned the value of 

// Else IF stament(s) are created, and used to specify a new condition if the first condtion is false 
//we begin with a compound conditional if statement, 
//the block of code inside will run if the boolean variable isStudent returns true  
// AS WELL AS the number type for variable zip is greater than 800. BOTH conditions must be met
// 55407 is not greater than 8,00, the first If statement will not run the block of code inside of it
// since the first conditional statements is false, we create another conditional statment
// next Else If statments returns false as well because boolean isStudents does not equal false 
//nor is the age variable less than thirty. only one condition needs to be true with an OR statement (||)
// However niether statments are true in the second conditional statement. no console.log messages displayed yet. . .
// we create another conditional statement: Else If isStudent boolean type equal to true,
// execute the block of code within the follor parameters
// this condition is true! this Else If statement returns the console.log message "Welcome to Prime"
// the last else code will not display a console.log message about the weather since a condition has already been met. 
//it is missing ";" at the end

// 👩🏽‍💻 CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// The code given will have something logically incorrect, 
// and your job is to find the issue and make a comment 
// describing what is wrong and how to fix it.

// 🫡 EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// 👩🏽‍💻 CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/


// 🤭🌟
// 4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


// I see an error regarding assignment values and variable name accuracy, 
// but it does no reaaally effect the code. 
// I would change the information above instead of changing the code in this instance. 
// e.g. . it does not inherently matter which color is colorOne  or  colorTwo. . 
// just so long what is said is the correct assignment of variable to value.

/*
let colorOne = 'red'; 
let colorTwo = 'blue';
let mix = true;

// or if you want to leave the text as is. . . 
// let colorOne = 'blue'; , let colorTwo = 'red'; 
// to match as said as assigned above correctly. 

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple;
}
*/

//add colorTwo = 'purple';, as directed in instructions. 




// 🤭🌟
//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'


//👩🏽‍💻
/*
let temp = 40;
const time = 4;

// change const time to: let time = 4; 
// to my understanding, time is one of the conditions we're checking in the If statement
// it would make sense to check a changing time/clock, as the clocks cycle 
// rather than const. otherwise this individual, if relying on this program, 
// would always be needing to throw their food away ( time(4) >= 4)
// unless this is a duration of 'four hours left out' as an indicator of spoilage? 
//we'd need more information and systems to run a program like that however ;3



// 👩🏽‍💻
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// the language in the scenario reads to me, ambiguous. 
// technically an OR || statement is checking if the temp is higher than 39 
// AND if the time is greater than or equal to 4 
// the OR || conditional statement only needs one to be true, true. . 
// but it is absolutely running to check 'either / even both AND' in the statement. . . 
//only one needs to be true for the line of code to run
// wouldn't you say this is true? 
// could change to an and statement, feels vague for me to know for certain what you desire to see here




//🤭🌟
//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//👩🏽‍💻
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


// make your code, format, word choice, order make sense, readable
// i would choose to write out as follows: 

//👩🏽‍💻
/* 
let age = 21;
const minAge = 21; sure it's fine. doesn't change often, assgn const

if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}
*/

