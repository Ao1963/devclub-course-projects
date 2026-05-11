console.clear();

// Definindo a função (A Máquina)
function checkAccess(age) {
    if (age >= 18) {
        return "✅ Access Granted";
    } else {
        return "❌ Access Denied";
    }
}

// Executando a função (Chamada)
const user1 = checkAccess(62);
const user2 = checkAccess(15);

console.log(`User Anselmo: ${user1}`);
console.log(`User Guest: ${user2}`);

/* 
   LOG: Functions encapsulate the if/else logic. 
   Now I can check 1,000 users just by calling checkAccess(age) 
   without rewriting the entire conditional block.
*/
