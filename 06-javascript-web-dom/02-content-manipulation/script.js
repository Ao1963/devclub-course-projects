console.clear(); // Garante o console limpo a cada teste

// =========================================================================
// 🎯 TOPIC 01: Text & Style Manipulation
// =========================================================================

// Mapeando os elementos necessários para a lição de casa
const myInput = document.getElementById("user-input");
const myButton = document.querySelector(".main-button");
const mediaArea = document.getElementById("media-area");

// =========================================================================
// ⚡ TOPIC 02: Event Functions (As Máquinas de Ação)
// =========================================================================

// Função que será chamada quando o usuário digitar no Input
function digiteiNoInput() {
    // Exibe no console o valor em tempo real do que está sendo digitado
    console.log("Digitando: ", myInput.value);
}

// LIÇÃO DE CASA: Função que roda ao clicar no botão
function cliqueiNoBotao() {
    alert("Botão clicado com sucesso!");

    // 1. Pegando o valor de dentro do input
    const inputValue = myInput.value;

    // 2. Criando a estrutura de um novo parágrafo usando innerHTML
    // Injetamos o valor do input diretamente dentro da tag <p>
    mediaArea.innerHTML = `<p class="paragraph-js" style="color: #007BFF; font-weight: bold;">
        Result: ${inputValue}
    </p>`;

    /* 
       LOG: Homework completed. 
       Captured 'input.value' and injected it into 'mediaArea' using innerHTML.
       Applied inline style modifications directly through the template string.
    */
}
