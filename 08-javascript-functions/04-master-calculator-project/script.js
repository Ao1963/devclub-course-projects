console.clear(); // Mantém o console do seu Mac limpo a cada ciclo

// =========================================================================
// 🎯 PASSO 1: Referências do DOM (Aonde desejamos chegar na UI)
// =========================================================================
const mainDisplay = document.getElementById("main-display");
const historyDisplay = document.getElementById("history-display");
const buttonsGrid = document.querySelector(".buttons-grid");

// Estado interno do motor (Escopo controlado da memória)
let currentInput = "0";
let previousInput = "";
let activeOperator = null;
let shouldResetDisplay = false;

// =========================================================================
// 🧮 PASSO 2: O Motor Matemático Abstrato (Lógica Dinâmica Reutilizável)
// =========================================================================
function executeCalculation(v1, v2, operator) {
    const num1 = parseFloat(v1);
    const num2 = parseFloat(v2);

    if (isNaN(num1) || isNaN(num2)) return "0";

    switch (operator) {
        case "sum": return (num1 + num2).toString();
        case "sub": return (num1 - num2).toString();
        case "mul": return (num1 * num2).toString();
        case "div": return num2 === 0 ? "Error" : (num1 / num2).toString();
        default: return v2;
    }
}

// =========================================================================
// 🎛️ PASSO 3: O Gerenciador de Ações Principal
// =========================================================================
function handleAction(type, value, opAttribute = null) {
    // Cenário A: Entradas Numéricas e Ponto
    if (type === "num") {
        if (currentInput === "0" || shouldResetDisplay) {
            currentInput = value;
            shouldResetDisplay = false;
        } else {
            if (value === "." && currentInput.includes(".")) return;
            currentInput += value;
        }
        mainDisplay.textContent = currentInput;
        return;
    }

    // Cenário B: Operadores Avançados (Objeto Math)
    if (type === "advanced") {
        if (opAttribute === "clear") {
            currentInput = "0";
            previousInput = "";
            activeOperator = null;
            historyDisplay.textContent = "";
        } else if (opAttribute === "sqrt") {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        } else if (opAttribute === "pow") {
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        }
        mainDisplay.textContent = currentInput;
        return;
    }

    // Cenário C: Operadores Básicos (+, -, *, /)
    if (type === "operator") {
        activeOperator = opAttribute;
        previousInput = currentInput;
        historyDisplay.textContent = `${previousInput} ${value}`;
        shouldResetDisplay = true;
        return;
    }

    // Cenário D: O Botão de Igual (=)
    if (type === "equal" && activeOperator) {
        const result = executeCalculation(previousInput, currentInput, activeOperator);
        historyDisplay.textContent = "";
        currentInput = result;
        mainDisplay.textContent = currentInput;
        activeOperator = null;
        shouldResetDisplay = true;
    }
}

// =========================================================================
// ⚡ PASSO 4: Event Delegation (Captura cliques do Trackpad/Mouse)
// =========================================================================
buttonsGrid.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    
    const target = event.target;
    if (target.classList.contains("btn-num")) handleAction("num", target.textContent);
    else if (target.classList.contains("btn-advanced")) handleAction("advanced", null, target.getAttribute("data-op"));
    else if (target.classList.contains("btn-operator")) handleAction("operator", target.textContent, target.getAttribute("data-op"));
    else if (target.id === "equal-button") handleAction("equal");
});

// =========================================================================
// ⌨️ PASSO 5: Global Keydown Listener (Ouvinte Dinâmico do Teclado do Mac)
// =========================================================================
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // 1. Mapeamento de Números e Ponto Decimal
    if ((key >= "0" && key <= "9") || key === ".") {
        handleAction("num", key);
        return;
    }

    // 2. Mapeamento de Operadores Básicos
    if (key === "+") handleAction("operator", "+", "sum");
    else if (key === "-") handleAction("operator", "-", "sub");
    else if (key === "*") handleAction("operator", "×", "mul");
    else if (key === "/") {
        event.preventDefault(); // Impede a abertura da caixa de busca nativa do Chrome ao apertar a barra
        handleAction("operator", "÷", "div");
    }
    // 3. Mapeamento de Execução (Enter ou sinal de igual)
    else if (key === "Enter" || key === "=") {
        event.preventDefault(); // Evita comportamentos padrões de envio de página
        handleAction("equal");
    }
    // 4. Mapeamento de Limpeza (Teclas Backspace ou Escape para dar 'Clear')
    else if (key === "Backspace" || key === "Escape") {
        handleAction("advanced", null, "clear");
    }
});
