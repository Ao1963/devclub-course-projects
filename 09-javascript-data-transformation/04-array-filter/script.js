/* =========================================================================
   🚀 PROJECT: Array Filter Fundamentals
   ========================================================================= */

// --- DATASET 01: Numbers ---
const numbers = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

/**
 * EXAMPLE 07: Multiple conditions logic
 * Target exactly 275, OR smaller odd numbers, OR larger even numbers.
 */
const complexNumbers = numbers.filter((number) => {
  const isTarget = number === 275;
  const isSmallerOdd = number < 275 && number % 2 !== 0;
  const isLargerEven = number > 275 && number % 2 === 0;
  return isTarget || isSmallerOdd || isLargerEven;
});

// --- DATASET 02: Companies ---
const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOn: 1975,
  },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckerberg",
    foundedOn: 2004,
  },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
  { name: "Netflix", marketValue: 899, CEO: "Reed Hastings", foundedOn: 1997 },
  { name: "Google", marketValue: 139, CEO: "Sundar Pichai", foundedOn: 1998 },
];

/**
 * EXAMPLE 10: Modern Mid-Cap Filtering
 * Criteria: Market Value < 200 AND Founded after 1990.
 */
const modernMidCap = companies.filter((company) => {
  return company.marketValue < 200 && company.foundedOn > 1990;
});

// --- OUTPUTS ---
console.log("--- Filtered Numbers (Ex 07) ---");
console.log(complexNumbers);

console.log("\n--- Modern Tech Companies (Ex 10) ---");
console.table(modernMidCap);
