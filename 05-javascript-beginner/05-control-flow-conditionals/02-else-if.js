console.clear();

const score = 95;

if (score >= 90) {
    console.log("🏆 Excellence: Grade A");
} else if (score >= 70) {
    console.log("✅ Approved: Grade B");
} else if (score >= 50) {
    console.log("⚠️ Recovery: Grade C");
} else {
    console.log("❌ Failed: Grade D");
}

/* 
   LOG: JS checks the first condition. It's false? It moves to the 'else if'. 
   The moment it finds a TRUE condition, it executes and STOPS checking the rest.
*/
