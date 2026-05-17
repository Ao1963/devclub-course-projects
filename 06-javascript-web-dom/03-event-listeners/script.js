console.clear();

// Mapeando os elementos do laboratório de eventos
const checkButton = document.querySelector(".click-me");
const currencySelect = document.querySelector(".currency-select");

// 1. Praticando o addEventListener (O Observador)
checkButton.addEventListener("click", function(event) {
    alert("Botão clicado via addEventListener!");
    console.log("Objeto de evento completo capturado:", event);
    console.log("Elemento exato que foi clicado (target):", event.target);
});

// 2. Monitorando a troca de moedas no Select usando o parâmetro (event)
currencySelect.addEventListener("change", function(event) {
    // Captura o valor da opção que o usuário escolheu na lista
    const selectedValue = event.target.value;
    console.log(`O usuário alterou a moeda para: ${selectedValue}`);
});

/* 
   LOG: Event listeners implementation completed.
   Demonstrating how the (event) parameter extracts live data from the DOM tree.
*/
