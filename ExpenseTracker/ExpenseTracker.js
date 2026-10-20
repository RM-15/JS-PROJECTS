
/*
==================================================
            EXPENSE TRACKER
==================================================
Concepts Used:
1. Variables and Arrays
2. Objects and Properties
3. for...of Loop
4. Arrow Functions
5. filter() and reduce()
6. Array Properties (.length)
7. Template Literals
==================================================
*/


// ==================================================
// SEGMENT 1: EXPENSE DATA
// ==================================================

// Expenses ka data objects ke form mein store kiya hai.
// Har object mein title, amount aur category hain.

const expenses = [
    { title: "Lunch", amount: 150, category: "Food" },
    { title: "Bus Ticket", amount: 40, category: "Travel" },
    { title: "Headphones", amount: 650, category: "Shopping" },
    { title: "Dinner", amount: 220, category: "Food" },
    { title: "Notebook", amount: 80, category: "Education" }
];


// ==================================================
// SEGMENT 2: DISPLAY ALL EXPENSES
// ==================================================

// for...of loop har expense ke object ko access karta hai.
// Template literals se details ek line mein display hoti hain.

console.log("===== ALL EXPENSES =====");

for (const expense of expenses) {
    console.log(
        `Title: ${expense.title}, Amount: ₹${expense.amount}, Category: ${expense.category}`
    );
}


// ==================================================
// SEGMENT 3: CALCULATE TOTAL SPENDING
// ==================================================

// reduce() sabhi expenses ke amounts ko add karta hai.
// total = accumulator
// expense = current object
// 0 = initial value

const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
);

console.log("\n===== TOTAL SPENDING =====");
console.log(`Total Spending: ₹${totalAmount}`);
// Answer: ₹1140


// ==================================================
// SEGMENT 4: FIND EXPENSIVE ITEMS
// ==================================================

// filter() sirf un expenses ko return karta hai
// jinka amount ₹200 se zyada hai.

const expensive = expenses.filter(
    (expense) => expense.amount > 200
);

console.log("\n===== EXPENSES ABOVE ₹200 =====");
console.log(expensive);

// Answer:
// Headphones - ₹650 - Shopping
// Dinner - ₹220 - Food


// ==================================================
// SEGMENT 5: FIND FOOD EXPENSES
// ==================================================

// filter() sirf un expenses ko select karta hai
// jinki category "Food" hai.

const food = expenses.filter(
    (expense) => expense.category === "Food"
);

console.log("\n===== FOOD EXPENSES =====");
console.log(food);

// Answer:
// Lunch - ₹150
// Dinner - ₹220


// ==================================================
// SEGMENT 6: COUNT FOOD EXPENSES
// ==================================================

// .length property filtered array mein
// total items ki count return karti hai.

const foodCount = food.length;

console.log("\n===== FOOD EXPENSE COUNT =====");
console.log(`Number of Food Expenses: ${foodCount}`);
// Answer: 2


// ==================================================
// SEGMENT 7: CALCULATE FOOD SPENDING
// ==================================================

// reduce() sirf Food expenses ke amounts ko add karta hai.
// Hum food array use kar rahe hain, isliye
// baaki categories ke amounts include nahi honge.

const foodTotal = food.reduce(
    (total, expense) => total + expense.amount,
    0
);

console.log("\n===== TOTAL FOOD SPENDING =====");
console.log(`Total Food Spending: ₹${foodTotal}`);
// Answer: ₹370


// ==================================================
// FINAL VERDICT
// ==================================================

// Total Expenses: 5
// Total Spending: ₹1140
// Expenses Above ₹200: 2
// Food Expenses: 2
// Total Food Spending: ₹370

// for...of = Har expense par loop chalana
// filter() = Condition ke basis par items select karna
// reduce() = Amounts ko add karke single result banana
// .length = Array mein items count karna
// Template literals = Values ko readable text mein display karna
