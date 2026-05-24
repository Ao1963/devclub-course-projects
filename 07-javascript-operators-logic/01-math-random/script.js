console.clear(); // Limpa o console no seu MacBook Air

// =========================================================================
// 📐 PARTE 1: Constantes e Funções Avançadas (Alinhado ao Conteúdo do Curso)
// =========================================================================

// 1. Math.PI: Retorna a constante do Pi (aproximadamente 3.14159...)
const piValue = Math.PI;
console.log(`π Value (Pi): ${piValue}`);

// 2. Math.pow(base, expoente): Potenciação (Ex: 2 elevado ao cubo / 2³)
const powerResult = Math.pow(2, 3);
console.log(`Power (2³): ${powerResult}`); // Outputs: 8

// 3. Math.sqrt(número): Raiz Quadrada (Square Root. Ex: Raiz de 25)
const squareRootResult = Math.sqrt(25);
console.log(`Square Root (√25): ${squareRootResult}`); // Outputs: 5


// =========================================================================
// 🧮 PARTE 2: Modificadores de Arredondamento (Revisão Técnica)
// =========================================================================
const testValue = 4.3;

console.log(`\nRounding operations for: ${testValue}`);
console.log("Ceil (Arredonda para Cima):", Math.ceil(testValue));   // Outputs: 5
console.log("Floor (Arredonda para Baixo):", Math.floor(testValue)); // Outputs: 4


// =========================================================================
// 🎲 PARTE 3: O Motor Random (Gerador de Inteiros Aleatórios)
// =========================================================================
// Math.random() cria uma fração entre 0 e 1.
// Multiplicamos pelo limite e arredondamos para baixo para ter números limpos.
const randomInteger = Math.floor(Math.random() * 100) + 1; // Entre 1 e 100

console.log(`\n🎲 Generated Random Integer (1-100): ${randomInteger}`);

/* 
   RECRUITER NOTE: 
   Combining Math.PI, Math.pow, and Math.sqrt showcases algorithmic math foundations.
   Using Math.floor alongside Math.random avoids precision parsing bugs, 
   instantly returning strict integer values on modern V8 engines.
*/

