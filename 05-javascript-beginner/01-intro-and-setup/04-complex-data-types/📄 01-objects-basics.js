console.clear();
const macBook = {
    model: "Air M1",
    color: "Space Gray",
    price: 5500,
    inStock: true
};

// Alterando um valor (Ação profissional)
macBook.price = 5200; 

console.log(`Model: ${macBook.model} | New Price: R$ ${macBook.price}`);

/* 
   LOG: Objects are dynamic. 
   Even if declared as a 'const', we can update the properties inside them.
   This is essential for e-commerce logic (price updates, inventory).
*/
