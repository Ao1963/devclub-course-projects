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

// =========================================================================
// 🔤 TOPIC 04: International String Standards & AI Refactoring
// =========================================================================
console.log("\n--- STRING STANDARDS TESTING ---");

// Padrão Google/Airbnb: Aspas simples para textos puramente estáticos
const companyTarget = 'Google'; 
console.log('Empresa Alvo:', companyTarget);

// Padrão Big Tech Moderno: Template Strings (Crasas) para injeções dinâmicas
function sayMyNameInternational(name = "Anselmo") {
    // A sugestão do Windsurf estava correta: protege a elasticidade do dado
    console.log(`👋 Olá, meu nome é: ${name}`);
}

sayMyNameInternational(); // Roda o valor padrão
sayMyNameInternational("Elon"); // Injeta o argumento dinâmico

/* 
   RECRUITER NOTE: 
   Enforcing strict single quotes for static string literals and ES6 template literals for 
   dynamic interpolation complies with Google and Airbnb core architectural style guides.
   Evaluating AI generation snippets (Windsurf overlay metrics) before merge acceptance 
   is a foundational requirement for robust, secure enterprise engineering pipelines.
*/

// =========================================================================
// 🎯 TOPIC 05: Function Return & Scope Isolation (Teoria das Anotações)
// =========================================================================
console.log("\n--- VOID VS RETURN TESTING ---");

// 1. Função Void (Vazia) - Não tem passaporte para o escopo global
function sumVoid(value1, value2) {
    const myResult = value1 + value2;
    // Sem return, o resultado morre aqui dentro
}
const resultVoid = sumVoid(10, 20);
console.log(`❌ Função Void retorna: ${resultVoid}`); // Outputs: undefined

// 2. Função com Return - Exporta o valor com segurança
function sumWithReturn(value1, value2) {
    const myResult = value1 + value2;
    return myResult; // Passaporte liberado!
    
    // Dead Code Rule: O motor do Mac ignora qualquer linha após o return
    console.log("Este log nunca vai rodar!");
}
const resultReturn = sumWithReturn(10, 20);
console.log(`🏆 Função com Return retorna: ${resultReturn}`); // Outputs: 30


// =========================================================================
// 🛒 TOPIC 06: REAL WORLD PROJECT - Supermarket Checkout Engine
// =========================================================================
console.log("\n--- CASH REGISTER ENGINE ---");

// O carrinho de compras que você sugerido
// O formato correto para a engenharia de software: números puros separados por ponto
const cart = [10, 244, 99, 2, 20, 33];

// Função 1: Varre o carrinho usando forEach e retorna a soma bruta
function calculateTotalCart(productsArray) {
    let total = 0;
    productsArray.forEach(price => {
        total += price;
    });
    return total;
}

// Função 2: Recebe um valor bruto e calcula o desconto por retorno
function applyFintechDiscount(grossAmount, discountPercentage = 10) {
    const discountValue = grossAmount * (discountPercentage / 100);
    return grossAmount - discountValue;
}

// EXECUÇÃO DO FLUXO EM CASCATA DINÂMICA
const rawTotal = calculateTotalCart(cart); // Saída da Função 1 alimentando a Função 2
const finalInvoice = applyFintechDiscount(rawTotal, 15); // Aplicando 15% de desconto

console.log(`🛒 Valor bruto das mercadorias: R$ ${rawTotal.toFixed(2)}`); // R$ 408.00
console.log(`💳 Valor final com desconto de 15%: R$ ${finalInvoice.toFixed(2)}`); // R$ 346.80

/* 
   RECRUITER NOTE: 
   Separating computing tasks into pipeline functions (calculateTotal -> applyDiscount) 
   respects the Single Responsibility Principle and achieves modular dynamic architecture.
   Leveraging functional array processing methods like 'forEach' inside isolated scopes 
   prevents index variable mutations from polluting global memory contexts.
*/






