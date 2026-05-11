console.clear();

const shoppingList = ["Milk", "Eggs", "Coffee", "Bread"];

console.log(`Full List: ${shoppingList}`);
console.log(`First Item: ${shoppingList[0]}`); // Acessa o índice 0 (Milk)
console.log(`List Size: ${shoppingList.length}`); // Mostra quantos itens tem

/* 
   LOG: Using 'length' is a standard way to monitor list size.
   Remember: Computers count from zero, humans count from one.
*/
/*
console.clear();    
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);   
console.log(`First Item: ${myArray[0]}`); // Acessa o índice 0 (1)
console.log(`Last Item: ${myArray[myArray.length - 1]}`); // Acessa o índice 9 (10)
console.log(`List Size: ${myArray.length}`);
*/

/*
const users = [20, 30, 490]
console.log(users[2]); // Acessa o índice 3, que não existe (undefined) 

users[2] = 500; // Atualiza o valor do índice 2 para 500
console.log(users); // Agora mostra 500
*/
/*
const users = [
{name: "Alice", age: 30},
{name: "Bob", age: 25},    
]

console.log(users) // Erro: Assignment to constant variable. Não podemos reatribuir um array declarado com const, mas podemos modificar seus elementos.

console.log(users[0].age) // Mostra 30

users[0].name = "Laryssa"

console.log(users) // Agora mostra o nome atualizado  para "Laryssa"
*/