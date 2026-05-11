/* 
   Em JavaScript, 'undefined' e 'null' são dois tipos de dados que representam a ausência de valor, mas têm significados diferentes.

   - 'undefined' é o valor padrão atribuído a variáveis que foram declaradas, mas não inicializadas. Também é o valor retornado por funções que não possuem uma declaração de retorno explícita.
   - 'null' é um valor atribuído intencionalmente para indicar que uma variável está vazia ou sem valor. É usado para representar a ausência intencional de qualquer objeto ou valor.

   Exemplo:
*/
/*
let preco; // Esqueci de definir
console.log(preco); // Saída: undefined
*/
/*
let estoque = null; // Eu sei que o estoque está vazio
console.log(estoque); // Saída: null
*/

let myData; // Declarada, mas não inicializada
console.log(`Value: ${myData} | Type: ${typeof myData}`);

let myEmptyValue = null; // Inicializada como nula propositalmente
console.log(`Value: ${myEmptyValue} | Type: ${typeof myEmptyValue}`);

/* 
   LOG: 'undefined' is a type of its own. 
   'null' is considered an 'object' type in JS due to a historical quirk.
   Both represent "no value", but with different intentions.
*/
