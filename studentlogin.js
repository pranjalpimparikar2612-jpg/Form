// Student Result System

// Input marks
let sub1 = Number(prompt("Enter marks for Subject 1"));
let sub2 = Number(prompt("Enter marks for Subject 2"));
let sub3 = Number(prompt("Enter marks for Subject 3"));
let sub4 = Number(prompt("Enter marks for Subject 4"));
let sub5 = Number(prompt("Enter marks for Subject 5"));

// Calculate total and percentage
let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = (total / 500) * 100;

// Determine grade
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

// Determine Pass/Fail
let status;

if (
    sub1 >= 40 &&
    sub2 >= 40 &&
    sub3 >= 40 &&
    sub4 >= 40 &&
    sub5 >= 40
) {
    status = "Pass";
} else {
    status = "Fail";
}

// Display Result
alert(
    "Student Result\n\n" +
    "Total Marks: " + total + " / 500\n" +
    "Percentage: " + percentage.toFixed(2) + "%\n" +
    "Grade: " + grade + "\n" +
    "Status: " + status
);

// Also display in console
console.log("Student Result");
console.log("Total Marks:", total);
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Status:", status);