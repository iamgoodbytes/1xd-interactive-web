/*
 ____  _  _  __ _  ____   __   _  _  ____  __ _  ____  __   __    ____ 
(  __)/ )( \(  ( \(    \ / _\ ( \/ )(  __)(  ( \(_  _)/ _\ (  )  / ___)
 ) _) ) \/ (/    / ) D (/    \/ \/ \ ) _) /    /  )( /    \/ (_/\\___ \
(__)  \____/\_)__)(____/\_/\_/\_)(_/(____)\_)__) (__)\_/\_/\____/(____/
 */

// 1. link this script file to your page and open your developer console
const myName = "Yente";
// 2. create a variable that keeps track of your name (can be let, const or var)
const birthYear = parseInt(prompt("What is your birth year?"));
// 3. create a variable that asks for your birthyear (use prompt() for that)
// hint: prompt() returns a string, so you'll need to convert it to a number with parseInt()
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
// 4. calculate your age (this will require grabbing the current year somehow)
// hint: you can get the current year with new Date().getFullYear()
console.log("Your age is:", age);
// 5. log your age to the console
function greet(name) {
  console.log(`Hi there, ${name}! Have a nice day!`);
}

// 6. write a function named greet() that wishes you a nice day like `Hi there, [your name]! Have a nice day!`
// hint: you can use string interpolation with backticks to insert your name into the string
// hint: the function should take [your name] as an argument
// use the function to print the message to the console
function greet(name) {
  console.log(`Hi there, ${name}! Have a nice day!`);
}

greet(myName);

// 7. write a function named calculateAge() that calculates your age and logs it to the console
// use the function to print your age to the console
// hint: the function should take your birthyear as an argument
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  console.log(`Your calculated age is: ${age}`);
}
// 8. use prompt() to ask if you how you are feeling today ("good", "bad", "ok")
// store the result in a variable
const mood = prompt("How are you feeling today? (good, bad, ok)");
// print an emoji to the console based on the result (😊, 😞, 😐)
switch (mood.toLowerCase()) {
  case "good":
    console.log("😊");
    break;
  case "bad":
    console.log("😞");
    break;
  case "ok":
    console.log("😐");
    break;
  default:
    console.log("🤔");
    break;
}

// kudos to you if you use a switch statement for this

// 9. create an array `foods` with three of your favorite foods
const foods = ["Pizza", "Pasta", "Tacos"];
// loop through the array and log each food to the console (use a for loop)
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}
// hint: you can get the length of an array with `array.length`

// 10. create an object `person` with properties `name`, `age` and `favoriteFoods`
// use the array `foods` as the value for the `favoriteFoods` property
const person = {
  name: myName,
  age: age,
  favoriteFoods: foods,
};

// log the object to the console
console.log(person);
