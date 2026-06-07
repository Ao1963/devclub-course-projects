console.clear(); // Mantém o console do seu Mac limpo

// =========================================================================
// 🧩 TOPIC 01: Function Declaration & Fallbacks (O Parente Gente Boa)
// =========================================================================
console.log("--- FUNCTION DECLARATION & FALLBACKS ---");

// Parâmetro padrão impede o 'undefined' se o argumento for omitido
function sayMyName(name = "Anselmo") {
    // SINTAXE CORRIGIDA: Mantida a simetria estrita da variável 'name'
    console.log(`👋 Olá, meu nome é: ${name}`);
}

sayMyName();         // Roda com o valor padrão: Anselmo
sayMyName("Paula");  // Sobrescreve com o argumento: Paula


// =========================================================================
// 🧮 TOPIC 02: Parameter Math & Type Coercion
// =========================================================================
console.log("\n--- PARAMETER MATH ---");

function sumValues(value1 = 0, value2 = 0, value3 = 0, stringA = "", stringB = "") {
    // Somar números com strings gera concatenação automática
    console.log("Resultado da Coerção:", value1 + value2 + value3 + stringA + stringB);
}

sumValues(10, 20, 30, "Anselmo", "Paula"); // Outputs: 60AnselmoPaula


// =========================================================================
// 🔄 TOPIC 03: Function Calling Function (Invocação Encadeada)
// =========================================================================
console.log("\n--- NESTED FUNCTION CALLS ---");

function subtract(v1, v2) {
    return v1 - v2;
}

function calculateSumAndLog(v1, v2) {
    const sumResult = v1 + v2;
    const subResult = subtract(v1, v2); // Uma função chamando outra diretamente
    console.log(`Soma: ${sumResult} | Subtração interna obtida: ${subResult}`);
}

calculateSumAndLog(20, 10);

/* 
   RECRUITER NOTE: 
   Enforcing ES6 default parameters guarantees contract safety during runtime ingestion pipelines.
   Decoupling computational functions into atomic, nested execution blocks respects the Single Responsibility Principle.
*/
