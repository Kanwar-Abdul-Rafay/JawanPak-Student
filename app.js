//  USER INPUT AND CONDITIONAL STATEMENT

// Chapter 9-11


// QUESTION 1
var prog = prompt("Enter a city name? ");
if (prog === "Karachi") {
    document.write("Wecome to city of lights!");
}

else {
    ("Enter a another city name!")
}


// QUESTION 2
var gen = prompt ("Enter a gender: ");
if ( gen === "Male") {
    document.write("Good Morning Sir!");
}
else if (gen === "Female") {
    document.write("Good Morning Ma'am!");
}
else {
    document.write("Please enter a valid gender!")
}


// QUESTION 3
var TSC = prompt("Enter a Traffic Signal Color?");
if (TSC === "Red") {
    document.write("Must Stop!");
}

else if (TSC === "Yellow") {
     document.write("Ready to move!");
}

else if (TSC === "Green") {
    document.write("Move now!");
}

else {
    document.write("Please enter a valid signal color!");
}


// QUESTION 4
var remFuel = prompt ("Remaining fuel in car (in liters)? ");
if (remFuel < 0.25 ) {
    document.write('Please refill the fuel in your car!');
}
else {
    document.write("Fuel is enough");
}

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}


// QUESTION 5
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

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

// QUESTION 6
var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));

var obtainedMarks = subject1 + subject2 + subject3;

var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
if (percentage >= 80) {
    grade = 'A+';
} else if (percentage >= 70) {
    grade = 'A';
} else if (percentage >= 60) {
    grade = 'B';
} else if (percentage >= 50) {
    grade = 'C';
} else if (percentage >= 40) {
    grade = 'D';
} else {
    grade = 'Fail';
}

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

if (grade === 'Fail') {
    console.log("Remarks: Sorry, you have failed.");
} else {
    console.log("Remarks: Congratulations!");
}


// QUESTION 7
var num = (1,2,3,4,5,6,7,8,9,10);
var SecNum = prompt ("guess the secret number:");
if (SecNum = num) {
    document.write("Bingo! Correct answer");
}

else if (SecNum !== num ) {
    document.write("Close to enough");
}

else{
    document.write("close to enough");
}


// QUESTION 8
var check = prompt ("Enter a number: ");
if (check % 3 == 0) {
    document.write(check + " Is divisible by 3!");
}

else {
    document.write(check + " Is not divisible by 3!");
}


// QUESTION 9
var check = prompt ("Input any number: ");
if (check % 2 == 0) {
    document.write(check + " This is even number!");
}

else {
    document.write(check + " This is odd number!")
}


// QUESTION 10
var temp = prompt("Enter A temperture?");
if (temp > 40 )  {
    document.write("It is too hot outside.");
}

else if (temp > 30) {
    document.write("The wether today is Normal");
}

else if (temp > 20 ){
    document.write("Today wether is cool");
}

else if (temp > 10 ) {
    document.write("OMG!Today the following is so cool");
}



// Chapter 12-13


// Question 6
var greeting = "Ohh MAM ";
var hour = "ohh SIR";
if(hour < 18 ) {
    document.write(greeting + "Good Day!");
}
else {
    document.write(greeting + "Good Evening!")
}


// Question 7
var time = prompt("Enter a time: ");
if (time >= 1000 && time < 1200 ) {
   document.write("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good AfterNnoon!");
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening");
}
else if (time >=2100 && time <= 2359) {
    document.write("Good Night");
}
else {
    document.write("Enter a correct time!")
}


