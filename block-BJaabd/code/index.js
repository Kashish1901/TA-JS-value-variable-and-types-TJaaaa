// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = prompt("What is your age?");
if (age < 4 ){
  alert(`Hey Kiddo! Can You Walk ?`);
}else if(age<=11){
  alert(` You are too young to participate in the marathon`);
}else if(age<=55){
  alert(`You can participate in the marathon`);
}else if (age>55){
  alert(`You are too old to participate in the marthon`)
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let num=prompt("Give one number value?");
switch(num){
  case num=1:
    alert(`ONE`);
    break;
    case num=2:
    alert(`TWO`);
    break;
    case num=3:
    alert(`THREE`);
    break;
    case num=4:
    alert(`FOUR`);
    break;
    case num=5:
    alert(`FIVE`);
    break;
    case num=6:
    alert(`SIX`);
    break;
    case num=7:
    alert(`SEVEN`);
    break;
    case num=8:
    alert(`EIGHT`);
    break;
    case num=9:
    alert(`NINE`);
    break;
   default:
    alert(`PLEASE TRY AGAIN`);
    break;
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = prompt(`Enter Your marks?`)
switch(marks){
  case marks<=30:
    alert(`FF`);
    break;
    case marks<=40:
    alert(`DD`);
    break;
    case marks<=50:
    alert(`CD`);
    break;
    case marks<=60:
    alert(`CC`);
    break;
    case marks<=70:
    alert(`BC`);
    break;
    case marks<=80:
    alert(`BB`);
    break;
    case marks<=90:
    alert(`AB`);
    break;
    case marks>90:
      alert(`AA`);
      break;
  }


/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let numA = prompt(`Enter the value of numA`);
let numB = prompt(`Enter the value of numB`);

if (numA > numB){
  alert(`${numA} is the larger number`);
}else {
  alert(`${numB} is larger number`);
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
