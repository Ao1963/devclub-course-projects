# Array Filter Method

Technical implementation of the `.filter()` method, focusing on conditional logic and data selection from complex objects.

## Concepts Learned

- **Immutability**: The method returns a new array without modifying the original.
- **Boolean Logic**: Using comparison and logical operators (`&&`, `||`) to define selection criteria.
- **Parameters**: Accessing `item`, `index`, and the `originalArray`.

## How to Run

```bash
node 04-array-filter/script.js
```

---

### 🛠️ Próximos Passos para você:

1. **Crie a pasta** `04-array-filter`.
2. **Crie os arquivos** e digite o código acima (lembre-se: digitar manualmente fixa o aprendizado!).
3. **Rode o teste:** No terminal do VS Code, digite `node 04-array-filter/script.js`.
4. **Suba para o GitHub:** Se o resultado no terminal estiver correto, faça o seu commit.

**Dica de mestre:** No exemplo das empresas, usei o `console.table(techSelection)`. Quando você rodar isso, verá que o Node.js organiza os objetos em uma tabela linda no seu terminal. Os recrutadores adoram ver esse capricho na apresentação dos dados!

Tudo certo para o teste agora? Se aparecer qualquer erro de "Unexpected token" novamente, já sabe: confira se não ficou nada sem comentar em cima!

# Array Filter Studies

## Key Features

- Implementation of multiple condition filtering using logical operators.
- Advanced data visualization using `console.table()`.

## Technical Insights

- **Netflix Exclusion**: During Example 10, Netflix was correctly excluded because its market value (899) exceeded the 200 threshold, even though it met the founding year criteria.
- **Visual Debugging**: Used `console.table()` to display the filtered results in a structured format, making data validation more efficient.

## How to Test Locally

1. Navigate to the folder: `cd 04-array-filter`
2. Run the script: `node script.js`
