// Student Database

let students = [];

// 1. Add Student
function addStudent(name) {
    students.push(name);
    console.log(name + " has been added.");
}

// 2. Remove Last Student
function removeLastStudent() {
    if (students.length > 0) {
        let removed = students.pop();
        console.log(removed + " has been removed.");
    } else {
        console.log("No students to remove.");
    }
}

// 3. Show All Students
function showAllStudents() {
    if (students.length === 0) {
        console.log("No students in the database.");
    } else {
        console.log("Student List:");
        students.forEach(function(student, index) {
            console.log((index + 1) + ". " + student);
        });
    }
}

// 4. Check if a Student Exists
function checkStudent(name) {
    if (students.includes(name)) {
        console.log(name + " exists in the database.");
    } else {
        console.log(name + " does not exist.");
    }
}

// 5. Show Total Students
function showTotalStudents() {
    console.log("Total Students: " + students.length);
}

// Example Usage
addStudent("Alice");
addStudent("Bob");
addStudent("Charlie");

showAllStudents();

checkStudent("Bob");
checkStudent("David");

showTotalStudents();

removeLastStudent();

showAllStudents();

showTotalStudents();