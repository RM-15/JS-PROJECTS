
/*
==================================================
        STUDENT PERFORMANCE ANALYZER 2.0
==================================================
Concepts Used:
1. Variables, Arrays and Objects
2. Functions and Return Values
3. for...of Loop
4. if...else and Ternary Operator
5. map(), filter(), reduce()
6. Template Literals
7. Function Reusability
==================================================
*/


// ==================================================
// SEGMENT 1: STUDENT DATA
// ==================================================

// Students ka data objects ke form mein store kiya hai.
// Har object mein student ka name aur marks hain.

const students = [
    { name: "Aman", marks: 78 },
    { name: "Sara", marks: 92 },
    { name: "Rahul", marks: 35 },
    { name: "Zoya", marks: 64 },
    { name: "Kabir", marks: 48 }
];


// ==================================================
// SEGMENT 2: DISPLAY STUDENT DETAILS
// ==================================================

// displayStudents() har student ka name aur marks display karta hai.
// for...of loop array ke har student object ko access karta hai.

function displayStudents() {
    console.log("===== STUDENT DETAILS =====");

    for (const student of students) {
        console.log(`${student.name}: ${student.marks} marks`);
    }
}

displayStudents();

// Output:
// Aman: 78 marks
// Sara: 92 marks
// Rahul: 35 marks
// Zoya: 64 marks
// Kabir: 48 marks


// ==================================================
// SEGMENT 3: CALCULATE AVERAGE MARKS
// ==================================================

// calculateAverage() reduce() ka use karke total marks calculate karta hai.
// total = accumulator, student = current object, 0 = initial value.
// Phir total marks ko students ki length se divide karta hai.
// return calculated average ko function ke bahar bhejta hai.

function calculateAverage() {
    const totalMarks = students.reduce(
        (total, student) => total + student.marks,
        0
    );

    return totalMarks / students.length;
}

console.log("\n===== AVERAGE MARKS =====");
console.log(`Average Marks: ${calculateAverage()}`);

// Output:
// Average Marks: 63.4


// ==================================================
// SEGMENT 4: CHECK PASS / FAIL RESULT
// ==================================================

// checkResult() student ke marks ko check karta hai.
// Agar marks 40 ya usse zyada hain, toh "Pass" return hota hai.
// Warna "Fail" return hota hai.
// Ternary operator if...else ki short form hai.

function checkResult(marks) {
    return marks >= 40 ? "Pass" : "Fail";
}

console.log("\n===== RESULT TESTING =====");
console.log(checkResult(78)); // Pass
console.log(checkResult(35)); // Fail


// ==================================================
// SEGMENT 5: FIND PASSING STUDENTS
// ==================================================

// getPassedStudents() filter() ka use karta hai.
// checkResult() har student ka result check karta hai.
// Sirf wahi students return hote hain jinka result "Pass" hai.

function getPassedStudents() {
    return students.filter(
        (student) => checkResult(student.marks) === "Pass"
    );
}

const passedStudents = getPassedStudents();

console.log("\n===== PASSED STUDENTS =====");
console.log(passedStudents);

// Output:
// Aman - 78
// Sara - 92
// Zoya - 64
// Kabir - 48

console.log(`Total Passed: ${passedStudents.length}`);

// Output:
// Total Passed: 4


// ==================================================
// SEGMENT 6: FIND THE TOPPER
// ==================================================

// getTopper() reduce() ka use karke topper find karta hai.
// highest = ab tak highest marks wala student.
// student = current student jiske marks compare ho rahe hain.
// Jiske marks zyada hote hain, uska object return hota hai.
// Aakhir mein reduce() topper ka complete object return karta hai.

function getTopper() {
    return students.reduce(
        (highest, student) =>
            student.marks > highest.marks ? student : highest
    );
}

const topper = getTopper();

console.log("\n===== CLASS TOPPER =====");
console.log(`Topper: ${topper.name}`);
console.log(`Highest Marks: ${topper.marks}`);

// Output:
// Topper: Sara
// Highest Marks: 92


// ==================================================
// SEGMENT 7: GENERATE STUDENT REPORT
// ==================================================

// generateReport() map() ka use karke report banata hai.
// Har student ke liye ek formatted string create hoti hai.
// checkResult() ko reuse karke Pass / Fail status milta hai.
// map() sabhi report strings ka naya array return karta hai.

function generateReport() {
    return students.map(
        (student) =>
            `${student.name}: ${student.marks} marks — ${checkResult(student.marks)}`
    );
}

console.log("\n===== FINAL STUDENT REPORT =====");

for (const result of generateReport()) {
    console.log(result);
}

// Output:
// Aman: 78 marks — Pass
// Sara: 92 marks — Pass
// Rahul: 35 marks — Fail
// Zoya: 64 marks — Pass
// Kabir: 48 marks — Pass


// ==================================================
// SEGMENT 8: FINAL SUMMARY
// ==================================================

// students.length = total students ki count.
// passedStudents.length = passing students ki count.
// Failed students = total students - passing students.

const totalStudents = students.length;
const failedStudents = totalStudents - passedStudents.length;

console.log("\n===== FINAL SUMMARY =====");
console.log(`Total Students: ${totalStudents}`);
console.log(`Average Marks: ${calculateAverage()}`);
console.log(`Highest Marks: ${topper.marks}`);
console.log(`Passed Students: ${passedStudents.length}`);
console.log(`Failed Students: ${failedStudents}`);

// Output:
// Total Students: 5
// Average Marks: 63.4
// Highest Marks: 92
// Passed Students: 4
// Failed Students: 1


// ==================================================
// CONCEPT REVISION
// ==================================================

// function = Code ko reusable blocks mein organize karna.
// return = Function se result bahar bhejna.
// for...of = Array ke har element par loop chalana.
// ternary operator = Condition ke basis par value select karna.
// reduce() = Array ke elements se ek result calculate karna.
// filter() = Condition match karne wale elements select karna.
// map() = Har element ko transform karke naya array banana.
// template literals = Strings mein variables insert karna.
// function reuse = Existing function ko dobara use karna.