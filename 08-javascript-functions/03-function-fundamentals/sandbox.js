/*Exemplo1:

function sayMyName(name) {
    return `Seu nome é ${name}`
}

/*const sayMyName2 = (name) => `Seu nome é ${name}`

console.log(sayMyName('Anselmo'))
console.log(sayMyName2('Antônia'))
*/

/*Exemplo2:

function sayMyName(name){
    return `Seu nome é ${name}`
}

const sayMyName2 = name => `Seu nome é ${name}` //apenas um parâmetro não precisa de parênteses.

console.log(sayMyName('Anselmo'))
console.log(sayMyName2('Antônia'))
*/
/*
Exemplo3:

function sayMyName(name, nickname){
    return `Meu nome é ${name} (vulgo ${nickname})`
}

const sayMyName2 = (name, nickname) => `Meu nome é ${name} (vulgo ${nickname})` //dois parâmetros, precisa de parênteses

console.log(sayMyName('Anselmo', 'Oliveira'))
console.log(sayMyName2('Antônia', 'Tom'))
*/

/*Exemplo4:

function sayMyName(name) {
    return `Seu nome é ${name}`
}

const sayMyName2 = (name) => {
   return `Seu nome é ${name}`
} //se for necessário mais linhas, tem que usar as chaves

console.log(sayMyName('Anselmo'))
console.log(sayMyName2('Antônia'))
*/
/*
Exemplo5:

function sum (number1, number2){
    return number1 + number2
}

const sum2 = (number1, number2) => number1 + number2

console.log(sum(32,26))
console.log(sum2(31,31))
*/



/* =========================================================================
   🚀 AULA: FUNÇÕES ANÔNIMAS (Evolução Sintática em Callbacks)
   ========================================================================= */

// DECLARAÇÕES DE SUPORTE: Necessárias para o Node.js não quebrar a execução
const sampleArray = [10, 20, 30];
const delayTime = 3000; 
 // 3 segundos para o temporizador

// -------------------------------------------------------------------------
// 🧩 Exemplo 1: Modern Anonymous Arrow Function no forEach
// -------------------------------------------------------------------------
// O forEach recebe uma função moderna que não tem nome (anônima)
sampleArray.forEach(element => {
    console.log(`Exemplo 1 (Arrow Anônima) -> Elemento: ${element}`);
});


// -------------------------------------------------------------------------
// 🧩 Exemplo 2: Traditional Anonymous Function no forEach
// -------------------------------------------------------------------------
// O forEach trabalha com a sintaxe antiga, omitindo o nome da função
sampleArray.forEach(function (element) {
    console.log(`Exemplo 2 (Tradicional Anônima) -> Elemento: ${element}`);
});


// -------------------------------------------------------------------------
// 🧩 Exemplo 3: Nested Modern & Traditional Anonymous Functions
// -------------------------------------------------------------------------
// O setInterval executa um bloco de código repetidamente a cada intervalo
const intervalId = setInterval(() => { 
    console.log("\n--- Disparando o loop do Exemplo 3 ---");
    
    sampleArray.forEach(function (element) {
        console.log(`Exemplo 3 (Aninhada) -> Elemento: ${element}`);
    });

    // Interrompe o temporizador imediatamente após a primeira execução para não travar o terminal
    clearInterval(intervalId); 
}, delayTime);


// -------------------------------------------------------------------------
// 🧩 Exemplo 4: Traditional Anonymous Function no setTimeout
// -------------------------------------------------------------------------
// Correção: Mapeado para setTimeout conforme sua nota, usando a escrita antiga
setTimeout(function() {
    console.log("\nExemplo 4 -> Executado uma única vez após o delay!");
}, delayTime);
