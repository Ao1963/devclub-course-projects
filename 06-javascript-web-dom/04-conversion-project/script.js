console.clear(); // Limpa o console a cada teste no seu MacBook Air

// =========================================================================
// 🎯 PASSO 1: Mapeamento Total de Elementos (DOM Selection)
// =========================================================================
const convertButton = document.querySelector("button");
const inputCurrency = document.querySelector("input");
const currencySelect = document.getElementById("select-to"); // Seleciona o menu de moedas

// Alvos de alteração na tela (Origem e Destino)
const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // R$ 0,00
const currencyValueConverted = document.querySelector(".currency-value"); // Valor final convertido
const currencyNameTarget = document.querySelector(".currency-box:nth-of-type(2) .currency"); // Nome da moeda alvo
const currencyImgTarget = document.querySelector(".currency-img"); // Imagem da bandeira alvo

// Taxas de câmbio fictícias para o exercício (Mercado de hoje)
const exchangeRates = {
    USD: 5.20,
    EUR: 5.60,
    CHF: 5.85,
    GBP: 6.50
};

// =========================================================================
// 🧮 PASSO 2: Motor de Conversão Matemática (Disparado pelo Botão)
// =========================================================================
function convertValues() {
    console.log("Botão acionado com sucesso!");

    let rawValue = inputCurrency.value;
    let cleanValue = rawValue.replace(",", ".");
    const inputCurrencyValue = parseFloat(cleanValue);

    if (isNaN(inputCurrencyValue)) {
        alert("Por favor, digite um valor numérico válido.");
        return;
    }

    // Identifica qual moeda está selecionada no menu agora (Ex: "USD", "EUR")
    const targetCurrency = currencySelect.value;

    // Pega a taxa correta da moeda escolhida dentro do nosso objeto de taxas
    const rateToday = exchangeRates[targetCurrency];
    const convertedValue = inputCurrencyValue / rateToday;

    // Atualiza a moeda de origem (Real)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    // Atualiza a moeda de destino com sua respectiva formatação internacional
    let locale = "en-US";
    if (targetCurrency === "EUR") locale = "de-DE";
    if (targetCurrency === "CHF") locale = "de-CH";
    if (targetCurrency === "GBP") locale = "en-GB";

    currencyValueConverted.innerHTML = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: targetCurrency
    }).format(convertedValue);
}

// =========================================================================
// 🔄 PASSO 3: Alternância Dinâmica de Bandeiras e Nomes (Disparado pelo Select)
// =========================================================================
function changeCurrency() {
    console.log("O usuário mudou a moeda de destino no menu!");
    const selectedCurrency = currencySelect.value;

    if (selectedCurrency === "USD") {
        currencyNameTarget.innerHTML = "Dólar americano";
        currencyImgTarget.src = "./assets/united-states-flag.png"; // Padrão PNG
    }
    if (selectedCurrency === "EUR") {
        currencyNameTarget.innerHTML = "Euro";
        currencyImgTarget.src = "./assets/euro.png"; // Padrão PNG
    }
    if (selectedCurrency === "CHF") {
        currencyNameTarget.innerHTML = "Franco Suíço";
        currencyImgTarget.src = "./assets/chf-flag.png"; // Padrão PNG
    }
    if (selectedCurrency === "GBP") {
        currencyNameTarget.innerHTML = "Libra Esterlina";
        currencyImgTarget.src = "./assets/gbp-flag.png"; // Padrão PNG
    }


    // Roda a conversão automaticamente ao mudar a moeda para atualizar o valor na tela
    convertValues();
}

// =========================================================================
// ⚡ PASSO 4: Ligando os Motores (Event Observers)
// =========================================================================
convertButton.addEventListener("click", convertValues); // Escuta o clique do botão
currencySelect.addEventListener("change", changeCurrency); // Escuta a mudança no menu select
