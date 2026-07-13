/* =========================================================================
   🚀 MODULE 09: JAVASCRIPT DATA TRANSFORMATION
   📌 TOPIC: .map() Method Fundamentals (Part 1 & 2)
   ========================================================================= */

// --- PART 1: PRIMITIVES & THE 3 PARAMETERS ---

const numbers = [1, 2, 3, 4, 5, 6, 7];

// Standard syntax visualizing all 3 built-in arguments provided by .map()
const dynamicTransformation = numbers.map((item, index, originalArray) => {
  console.log(
    `Processing Item: ${item} | Index: ${index} | Source: [${originalArray}]`,
  );
  return item * 10;
});

// Concise syntax (Single-line expression / Implicit return)
const cleanDoubledNumbers = numbers.map((num) => num * 6);

console.log("Original Numbers Array:", numbers);
console.log("Transformed Array (x10):", dynamicTransformation);
console.log("Concise Multiplied Array (x6):", cleanDoubledNumbers);

// --- PART 2: OBJECT TRANSFORMATION & CONDITIONAL LOGIC ---

const guestList = [
  { name: "Anselmo", vip: true },
  { name: "Antônia", vip: false },
  { name: "João", vip: true },
  { name: "Maria", vip: false },
  { name: "Letícia", vip: true },
  { name: "Joana", vip: false },
  { name: "Pedro", vip: true },
  { name: "Lucas", vip: false },
];

// Approach A: Inline Ternary Operator (Best Practice for clean code)
const vipDashboardTernary = guestList.map((user) => ({
  name: user.name,
  braceletColor: user.vip ? "Black" : "Green",
}));

// Approach B: Standard If/Else Statement (Procedural Logic)
const vipDashboardConditional = guestList.map((user) => {
  let assignedColor;

  if (user.vip) {
    assignedColor = "Black";
  } else {
    assignedColor = "Green";
  }

  return {
    name: user.name,
    braceletColor: assignedColor,
  };
});

console.log("Ternary Mapping Output:", vipDashboardTernary);
console.log("Conditional Mapping Output:", vipDashboardConditional);
