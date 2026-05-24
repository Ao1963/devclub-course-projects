console.clear(); // Limpa logs antigos para depuração

// 🎯 1. Mapeamento de Elementos do DOM (Sincronizado com o seu HTML)
const drawButton = document.querySelector(".sortear-button");
const minInput = document.querySelector(".input-min");
const maxInput = document.querySelector(".input-max");
const titleElement = document.querySelector("h2");

// 🧮 2. Função Algorítmica do Sorteio (Equação de Intervalo Fechado)
function generateRandomNumber() {
    console.log("Processando o sorteio...");

    const min = Math.ceil(parseInt(minInput.value));
    const max = Math.floor(parseInt(maxInput.value));

    // Validações de Segurança contra inputs vazios
    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, preencha os dois campos numéricos.");
        return;
    }

    if (min >= max) {
        alert("O número mínimo deve ser menor que o número máximo!");
        return;
    }

    // Fórmula Matemática para sortear estritamente entre o Min e o Max
    const drawnResult = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(`🏆 Sucesso! Número sorteado entre [${min} e ${max}]: ${drawnResult}`);

    // Injeta o resultado dinamicamente alterando o título h2
    titleElement.innerHTML = `🏆 Número Sorteado: <span style="color: #AEC346; font-weight: bold;">${drawnResult}</span>`;
}

// ⚡ 3. Ativação do Ouvinte de Eventos (Event Listener)
drawButton.addEventListener("click", generateRandomNumber);


