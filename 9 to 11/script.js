// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” 
var city = prompt("Write your city name");
if(city == "karachi") {
    alert("Welcome to city of lights")
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning 
// Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender");
if(gender == "male"){
    alert("Good Morning Sir.")
}
if(gender == "female"){
    alert("Good Morning Ma'am.")
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according 
// to this table: 
var traffic_Signal = prompt("Enter color of road traffic signal");
if (traffic_Signal == "red"){
    alert("Must Stop");
}
if (traffic_Signal == "yellow"){
    alert("Ready to move ");
}
if (traffic_Signal == "green"){
    alert("Move now ");
}
// var table = document.getElementById("signalTable");
// table.innerHTML = "<tr><td>" + color.charAt(0).toUpperCase() + color.slice(1) + "</td><td>" + message + "</td></tr>";

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
//show the message “Please refill the fuel in your car” 
var remainingFuel = prompt("Enter remaining fuel in car (in litres)");
if(remainingFuel < "0.25litres"){
    alert("Please refill the fuel in your car")
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
// a.
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}
// b. 
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
// c. 
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 
// d. 
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
// e.
 if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}
// f.
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    } 
// output
document.write("part:a 'Alert message is displayed' <br/>");
document.write("part:b 'No alert message is displayed.' <br/>");
document.write("part:c ''Alert message is displayed only for 2 and 4 condition' <br/>");
document.write("part:d 'Alert message is displayed' <br/>");
document.write("part:e 'Alert message is displayed (true)' <br/>");
document.write("part:f 'Alert message is displayed' <br/>");

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as per following table: 
var s1Mark = +prompt("Enter your marks got in Data Science?");
var s2Mark = +prompt("Enter your marks got in Data Mining?");
var s3Mark = +prompt("Enter your marks got in Data structure?");
var totalMark = prompt("Enter your Total Marks");
var obtainedMarks = s1Mark + s2Mark + s3Mark;
var percentage = obtainedMarks/totalMark*100;
document.write("<h1>Total Marks</h1>");
document.write(`Total Marks: ${totalMark} <br/>`);
document.write(`Obtained Marks: ${obtainedMarks} <br/>`);
document.write(`Percentage:  ${percentage} <br/>`);
var grade;
if (percentage >= 90) {
    grade = "A+";
}
if (percentage >= 80 && percentage < 90) {
    grade = "A";
}
if (percentage >= 70 && percentage < 80) {
    grade = "B";
}
if (percentage >= 60 && percentage < 70) {
    grade = "C";
}
if (percentage >= 50 && percentage < 60) {
    grade = "D";
}
if (percentage < 50) {
    grade = "F";
}

document.write(`Grade: ${grade} <br/>`);
if (percentage < 50) {
    document.write("Remarks: You need to improve");
} 
if (percentage > 50) {
    document.write("Remarks: Good job!");
}

// 7. Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
var secretNumber = 5;
var guessSecretNumber = +prompt("Guess the Secret Number");
// a. If user guesses the same number, show “Bingo! Correct answer”. 
if (guessSecretNumber === secretNumber){
    document.write("Bingo! Correct answer");
}
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 
if (guessSecretNumber +1 === secretNumber){
    alert("Close enough to the correct answer")
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number 
// is divisible by 3.
var number = +prompt("Enter a number:");
if(number %3 === 0){
    alert("The number is divisible by 3")
}
if(number %3 !== 0){
    alert("The number is not divisible by 3")
}

// 9. Write a program that checks whether the given input is an even number or an odd number. 
var number1 = +prompt("Enter a number:");
if(number %2 === 0){
    alert("The number is even number")
}
if(number %2 !== 0){
    alert("The number is odd number")
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria 
var temperature = +prompt("Enter today's temperture in tens")
// a. T > 40 then “It is too hot outside.” 
if(temperature === 40){
    alert("It is too hot outside.")
}
// b. T > 30 then “The Weather today is Normal.” 
if(temperature === 30){
    alert("The Weather today is Normal.")
}
// c. T > 20 then “Today’s Weather is cool.” 
if(temperature === 20){
    alert("Today’s Weather is cool.")
}
// d. T > 10 then “OMG! Today’s weather is so Cool.” 
if(temperature === 10){
    alert("OMG! Today’s weather is so Cool")
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
var firstNumber = +prompt("Enter first number for calculation");

// b. Second number
var secondNumber = +prompt("Enter second number for calculation");

// c. Operation (+, -, *, /, %)
var operator = prompt("Enter the operator for calculation");

// Compute & show the calculated result to user.
var result;
if (operator === "+") {
  result = firstNumber + secondNumber;
}
if (operator === "-") {
  result = firstNumber - secondNumber;
} 
if (operator === "*") {
  result = firstNumber * secondNumber;
}
if (operator === "/") {
  result = firstNumber / secondNumber;
} 
if (operator === "%") {
  result = firstNumber % secondNumber;
}

document.write(`The result of ${firstNumber} ${operator} ${secondNumber} is ${result}.`);