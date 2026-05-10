// Tipos de dados primitivos: Números
/*
˜Em JavaScript, os números são um tipo de dado primitivo usado para representar valores numéricos. 
Eles podem ser inteiros (ex: 42) ou decimais (ex: 3.14). 
Você pode realizar operações matemáticas com números, como adição, subtração, multiplicação e divisão. 
Sem aspas simples ou duplas.˜
*/


// Exemplo de uso de números em JavaScript:


/* const myNumber = 100;
const myFakeNumber = "100";

// Execução para validar a diferença técnica:
console.log(myNumber + 10);      // Resultado: 110 (Aritmética)
console.log(myFakeNumber + 10);  // Resultado: 10010 (Texto/Concatenação)

/* 
   LOG: "Numbers" vs "Strings". 
   As aspas mudam o comportamento do motor JS de 'Calculadora' para 'Editor de Texto'.
   Sempre usar tipos puros para operações matemáticas.
*/
/*
const myNumber = 500;
const result = myNumber / 1000 * 100;

console.log(`The result of the operation is: ${result}`);
*?
/* 
   LOG: 500 divided by 1000 is 0.5. 
   0.5 multiplied by 100 equals 50.
   JavaScript executes multiplication and division from left to right.
*/


//Se você usar const ou let com o mesmo nome duas vezes no mesmo arquivo, o código vai "quebrar" e dar um erro de SyntaxError: Identifier 'myNumber' has already been declared.
//Formas profissionais de lidar com isso:
//1. Reutilizar a variável (Sem o const ou let) Se você quer apenas mudar o valor para um novo exercício no mesmo arquivo, você declara com let e depois apenas atribui um novo valor:
/*
let myNumber = 500;
console.log(myNumber / 1000 * 100); // Resultado: 50

myNumber = 1000; // Aqui eu não uso "let" de novo, apenas mudo o valor
console.log(myNumber / 1000 * 100); // Resultado: 100
*/

//2. Usar nomes numerados ou descritivos (Recomendado)Para deixar todos os exemplos visíveis e funcionando sem erros, o ideal é diferenciar os nomes:

// Exercício 01
const firstTest = 500;
console.log(firstTest / 10); //Resultado: 50

// Exercício 02
const secondTest = 1000;
console.log(secondTest / 10); //Resultado: 100

// Exercício 03
const thirdTest = 1500;
console.log(thirdTest / 10); //Resultado: 150


//3. Como ver apenas o resultado do último?

//Não existe um comando nativo para o JavaScript ignorar os console.log de cima e mostrar apenas o último automaticamente. Se o código está lá e não está comentado, o computador vai fazer o que está escrito.O que os profissionais fazem:Comentar (//): É o mais comum para quem está estudando. Você deixa o código ali para consulta, mas "desliga" a execução dele.Limpar o console: Você pode adicionar um console.clear() antes do seu último exercício. Isso vai limpar a tela do terminal e mostrar apenas o que vem abaixo:
/*
const test1 = 500;
console.log(test1);

console.clear(); // Limpa tudo que apareceu acima no terminal

const test2 = 1000;
console.log(test2); // Você só verá o 1000 na tela
*/

/* --- Exercício 01: Cálculo de Média --- */
// const myNumber = 500;
// console.log(myNumber / 10);

// --- Exercício 02: Multiplicação ---
/*
const currentNumber = 200;
console.log(currentNumber * 2);
*/
