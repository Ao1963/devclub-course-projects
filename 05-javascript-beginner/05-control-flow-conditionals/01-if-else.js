// console.clear();

// const userAge = 15;
// const drivingAge = 18;

// if (userAge >= drivingAge) {
//     console.log("✅ Access Granted: You are old enough to drive.");
// } else {
//     console.log("❌ Access Denied: You are too young.");
// }

/* 
   LOG: The 'if' checks the comparison (62 >= 18), 
   which results in 'true', so the first block runs.
*/

console.clear();

const stockA = 10;
const stockB = 20;
const stockC = "10";

// 1. Testando Maior e Menor
if (stockB > stockA) {
    console.log("Stock B is greater than A.");
}

// 2. A grande diferença entre == e === (Importante!)
if (stockA == stockC) {
    console.log("== only checks the value (10 equals '10').");
}

if (stockA === stockC) {
    console.log("This won't run because types are different (Number vs String).");
} else {
    console.log("=== checks value AND type. Use this in professional code!");
}

/* 
   LOG: Using === avoids bugs. 
   It's the industry standard to prevent "fakeNumbers" from being treated 
   as real numbers in logic gates.
*/
