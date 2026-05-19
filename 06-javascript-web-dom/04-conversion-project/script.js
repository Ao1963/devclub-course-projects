console.clear(); // Clears the browser console for clean debugging

// =========================================================================
// 🎯 STEP 1: Mapping DOM Elements (Precise Node Selection)
// =========================================================================
const convertButton = document.querySelector("button");
const valueInput = document.querySelector("input");

// Mapeando diretamente os parágrafos de valor de cada moeda pelas suas classes
const currencyValueToConvert = document.querySelector(".currency-box:nth-of-type(1) .currency-value"); // Real Value Text
const currencyValueConverted = document.querySelector(".currency-box:nth-of-type(2) .currency-value"); // Target Value Text

// =========================================================================
// 🧮 STEP 2: Processing & Calculation Core Engine
// =========================================================================
function convertValues() {
    console.log("The button was clicked! Processing conversion...");
    
    // Capturando o texto digitado e trocando a vírgula por ponto automaticamente (Anti-bug)
    let rawAmount = valueInput.value;
    let cleanAmount = rawAmount.replace(",", "."); 
    
    // Convertendo o texto limpo em um número real para a matemática funcionar
    const inputAmount = parseFloat(cleanAmount);
    console.log(`User entered amount (Normalized): ${inputAmount}`);
    
    // Validação de segurança: se o usuário não digitou um número válido, para a execução
    if (isNaN(inputAmount)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    const dollarToday = 5.20; 
    const convertedAmount = inputAmount / dollarToday;
    
    // =========================================================================
    // 👁️ STEP 3: Updating the UI (DOM Output Manipulation)
    // =========================================================================
    // Atualizando as telas com formatação de moeda profissional
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputAmount);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedAmount);
}

// =========================================================================
// ⚡ STEP 4: Event Binding (Listening to User Actions)
// =========================================================================
convertButton.addEventListener("click", convertValues);
