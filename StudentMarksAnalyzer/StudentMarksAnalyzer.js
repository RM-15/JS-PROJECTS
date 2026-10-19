
/*
==================================================
        STUDENT MARKS ANALYZER
==================================================
Concepts Used:
1. Variables and Arrays
2. Objects and Properties
3. for...of Loop
4. if...else Condition
5. Arithmetic and Comparison Operators
6. map(), filter(), reduce()
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

// for...of loop har student ke object ko access karta hai.

console.log("===== STUDENT DETAILS =====");

for (const student of students) {
    console.log(`Name: ${student.name}, Marks: ${student.marks}`);
}

// Output:
// Aman - 78
// Sara - 92
// Rahul - 35
// Zoya - 64
// Kabir - 48


// ==================================================
// SEGMENT 3: CALCULATE TOTAL MARKS
// ==================================================

// reduce() sabhi students ke marks ko add karta hai.
// total = accumulator, student = current object, 0 = initial value.

const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log("\n===== TOTAL MARKS =====");
console.log(`Total Marks: ${totalMarks}`); // Answer: 317


// ==================================================
// SEGMENT 4: CALCULATE AVERAGE MARKS
// ==================================================

// Average = Total Marks / Total Students

const average = totalMarks / students.length;

console.log("\n===== AVERAGE MARKS =====");
console.log(`Average Marks: ${average}`); // Answer: 63.4


// ==================================================
// SEGMENT 5: FIND HIGHEST MARKS
// ==================================================

// Pehle student ke marks se highest initialize kiya.
// Phir har student ke marks compare karke highest update kiya.

let highest = students[0].marks;

for (const student of students) {
    if (student.marks > highest) {
        highest = student.marks;
    }
}

console.log("\n===== HIGHEST MARKS =====");
console.log(`Highest Marks: ${highest}`); // Answer: 92


// ==================================================
// SEGMENT 6: PASSING STUDENTS
// ==================================================

// filter() sirf un students ko return karta hai
// jinke marks 40 ya usse zyada hain.

const passed = students.filter(
    (student) => student.marks >= 40
);

console.log("\n===== PASSED STUDENTS =====");
console.log(passed.map(student => student.name));
// Answer: ["Aman", "Sara", "Zoya", "Kabir"]


// ==================================================
// SEGMENT 7: PASS / FAIL STATUS
// ==================================================

// if...else har student ke marks check karta hai.

console.log("\n===== PASS / FAIL STATUS =====");

for (const student of students) {
    if (student.marks >= 40) {
        console.log(`${student.name}: Passed`);
    } else {
        console.log(`${student.name}: Failed`);
    }
}

// Answer:
// Aman: Passed
// Sara: Passed
// Rahul: Failed
// Zoya: Passed
// Kabir: Passed


// ==================================================
// SEGMENT 8: EXTRACT STUDENT NAMES
// ==================================================

// map() har object se sirf name lekar naya array banata hai.

const studentNames = students.map(
    (student) => student.name
);

console.log("\n===== STUDENT NAMES =====");
console.log(studentNames);
// Answer: ["Aman", "Sara", "Rahul", "Zoya", "Kabir"]


// ==================================================
// FINAL VERDICT
// ==================================================

// Total Students: 5
// Total Marks: 317
// Average Marks: 63.4
// Highest Marks: 92
// Passed Students: 4
// Failed Students: 1
// Student Names Extracted: 5

// for...of = Har student par loop chalana
// if...else = Pass / Fail check karna
// reduce() = Total marks calculate karna
// filter() = Passing students select karna
// map() = Student names extract karna