console.clear(); // Mantém o console limpo no MacBook Air

// =========================================================================
// 🧮 TOPIC 01: Arithmetic Operators (Review)
// =========================================================================
const numberA = 10;
const numberB = 3;

console.log("--- ARITHMETIC TESTING ---");
console.log("Division:", numberA / numberB);
console.log("Modulus (Resto da Divisão):", numberA % numberB); // Outputs: 1

// =========================================================================
// 🎯 TOPIC 02: Assignment Operators (Operadores de Atribuição)
// =========================================================================
console.log("\n--- ASSIGNMENT TESTING ---");

// 1. Atribuição Simples (=)
let result = 10;
console.log("Simples (=):", result); // Outputs: 10

// 2. Atribuição de Adição (+=) -> result = result + 5
result += 5; 
console.log("Adição (+=):", result); // Outputs: 15

// 3. Atribuição de Subtração (-=) -> result = result - 3
result -= 3;
console.log("Subtração (-=):", result); // Outputs: 12

// 4. Atribuição de Multiplicação (*=) -> result = result * 2
result *= 2;
console.log("Multiplicação (*=):", result); // Outputs: 24

// 5. Atribuição de Divisão (/=) -> result = result / 4
result /= 4;
console.log("Divisão (/=):", result); // Outputs: 6

// 6. Atribuição de Resto (%=) -> result = result % 4
result %= 4;
console.log("Resto (%=):", result); // Outputs: 2 (O que sobra de 6 dividido por 4)

/* 
   RECRUITER NOTE: 
   Compound assignment operators (+=, -=, *=, /=, %=) modify variables in-place.
   This practice eliminates unnecessary variable declaration overhead in the V8 engine.
*/

// =========================================================================
// ⚖️ TOPIC 03: Comparison Operators (Operadores de Comparação pt.1 e pt.2)
// =========================================================================
console.log("\n--- COMPARISON TESTING ---");

const x = 30;
const y = "30";
const z = 45;
const w = 30;

// 1. Igualdade e Diferença (Revisão pt.1)
console.log("Igualdade Rasa (30 == '30'):", x == y);   // Outputs: true
console.log("Igualdade Estrita (30 === '30'):", x === y); // Outputs: false
console.log("Diferença Estrita (30 !== '30'):", x !== y); // Outputs: true

console.log("\n--- MAGNITUDE TESTING (pt.2) ---");

// 2. Maior que (>)
console.log("Maior que (45 > 30):", z > x);            // Outputs: true (45 é maior que 30)
console.log("Maior que (30 > 30):", x > w);            // Outputs: false (30 não é maior que 30, são iguais)

// 3. Menor que (<)
console.log("Menor que (30 < 45):", x < z);            // Outputs: true (30 é menor que 45)
console.log("Menor que (45 < 30):", z < x);            // Outputs: false (45 não é menor que 30)

// 4. Maior ou Igual a (>=)
console.log("Maior ou Igual (45 >= 30):", z >= x);     // Outputs: true (45 é maior)
console.log("Maior ou Igual (30 >= 30):", x >= w);     // Outputs: true (30 é igual a 30, atende ao critério)

// 5. Menor ou Igual a (<=)
console.log("Menor ou Igual (30 <= 45):", x <= z);     // Outputs: true (30 é menor)
console.log("Menor ou Igual (45 <= 30):", z <= x);     // Outputs: false (45 é maior que 30)

/* 
   RECRUITER NOTE: 
   Boundary comparison operators (>= and <=) are essential for array indexing 
   and strict range boundaries, avoiding classical off-by-one algorithmic errors.
*/

// =========================================================================
// 🎯 TOPIC 04: Logical Operators (Operadores Lógicos)
// =========================================================================
console.log("\n--- LOGICAL OPERATORS TESTING ---");

// 1. Cenário AND (&&) - A Pessoa Exigente
const temDinheiro = true;
const temTempo = true;
const temDisposicao = false;

console.log("&& (Exigente): Tem dinheiro E tempo?", temDinheiro && temTempo); // true
console.log("&& (Exigente): Tem dinheiro E disposição?", temDinheiro && temDisposicao); // false

// 2. Cenário OR (||) - O "Tanto Faz"
const temPix = false;
const temCartao = true;
console.log("|| (Tanto faz): Aceita Pix OU Cartão?", temPix || temCartao); // true

// 3. Cenário NOT (!) - O Inversor do Contra
const usuarioLogado = true;
console.log("! (Negação): Invertendo o estado logado:", !usuarioLogado); // false

// 4. Cenário Avançado Combinado (&& e || juntos) - Regra de Frete Grátis
const ehClientePremium = true;
const valorCompra = 120;
const temCupomFrete = false;

// Regra: (Premium E compra > 100) OU se tiver o cupom direto
const ganhouFreteGratis = (ehClientePremium && valorCompra > 100) || temCupomFrete;

console.log("\n--- REGRA DE NEGÓCIO COMBINADA ---");
console.log("Ganhou Frete Grátis?", ganhouFreteGratis); // Outputs: true (Caiu na primeira regra)

/* 
   RECRUITER NOTE: 
   Logical short-circuiting (using && and ||) optimizes resource handling.
   If the first statement of an AND block evaluates to false, 
   modern engines immediately drop execution to save clock memory cycles.
*/

// =========================================================================
// 🎯 TOPIC 05: Typeof Operator (Inspeção de Tipos Primitivos)
// =========================================================================
console.log("\n--- TYPEOF OPERATOR TESTING ---");

const textVar = "Anselmo";
const numVar = 2026;
const boolVar = true;
const objectVar = { name: "MacBook Air" };

console.log("Tipo de textVar:", typeof textVar);     // Outputs: string
console.log("Tipo de numVar:", typeof numVar);       // Outputs: number
console.log("Tipo de boolVar:", typeof boolVar);     // Outputs: boolean
console.log("Tipo de objectVar:", typeof objectVar); // Outputs: object

// =========================================================================
// 🧹 TOPIC 06: Delete Operator (Gerenciamento e Limpeza de Objetos)
// =========================================================================
console.log("\n--- DELETE OPERATOR TESTING ---");

const employee = {
    name: "Anselmo",
    role: "Software Engineer",
    salary: 10000
};

console.log("Objeto antes do delete:", employee);

// Deletando a propriedade salary para expurgar dados sensíveis da memória
delete employee.salary;

console.log("Objeto após o delete:", employee); // A chave 'salary' sumiu!

/* 
   FINAL RECRUITER NOTE: 
   Using typeof architecture patterns ensures runtime data contract safety.
   The delete operator mutates object structures directly; in enterprise scale, 
   prefer rest parameter destructuring over delete to preserve object immutability optimization.
*/



