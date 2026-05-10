const text1 = 'Olá, mundo!'; // String com aspas simples
const text2 = "Oh céus, oh vida!"; // String com aspas duplas
const text3 = `Olá, Anselmo`; // String com crases (tmplates literals or template strings)

console.log (text1); // Output: Olá, mundo!
console.log (text2); // Output: Oh céus, oh vida!
console.log (text3); // Output: Olá, Anselmo!

/*

Strings

Em JavaScript, as strings são usadas para armazenar texto. Você pode criar uma string usando aspas simples ('...'), aspas duplas ("...") ou crases (`...`).

- Aspas simples ou duplas: Use para criar strings simples (ex: 'Olá, mundo!' ou "Olá, mundo!"). 
  Atenção: Se você usar aspas simples para criar uma string, 
  vocé não pode usar aspas simples dentro dela sem escapar (ex: 'It\'s a nice day!'). 
  O mesmo vale para aspas duplas (ex: "She said, \"Hello!\"").
- Crases: Use para criar strings, também.   

Tipos de Dados

JavaScript tem vários tipos de dados, incluindo:
- String: para texto (ex: "Olá, mundo!"). Com aspas simples ou duplas, 
- String: Use crases para interpolação de variáveis (ex: `Olá, ${nome}!`)
- Number: para números (ex: 42, 3.14)
- Boolean: para valores verdadeiros ou falsos (ex: true, false)
- Null: para representar a ausência de valor (ex: null) 
- Undefined: para representar a ausência de valor (ex: undefined)
- Object: para objetos (ex: {nome: "João", idade: 30})

*/

// Declarando dados diferentes
const studentName = "Anselmo"; // String
const age = 62;                 // Number
const isLearningJS = true;      // Boolean

// Executando a Template String (Padrão Profissional)
console.log(`Student: ${studentName} | Age: ${age} | Study Status: ${isLearningJS}`);

// Definindo os dados (Execução de tipos primitivos)
const brand = "Apple";            // String
const screenInches = 13.3;        // Number (MacBook Air size)
const isPortable = true;          // Boolean

// Saída formatada com Template String
console.log(`Device: ${brand} | Screen: ${screenInches}" | Portable: ${isPortable}`);

// const x = 10;
