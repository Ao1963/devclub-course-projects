console.clear(); // Restabelece o controle de fluxo limpo no console

const convertButton = document.querySelector("button");
const inputCurrency = document.getElementById("user-input");
const selectFrom = document.getElementById("select-from");
const selectTo = document.getElementById("select-to");

const currencyNameFrom = document.querySelector(".currency-box:nth-of-type(1) .currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyImgFrom = document.querySelector(".currency-img-from"); // Classe corrigida

const currencyNameTarget = document.querySelector(".currency-box:nth-of-type(2) .currency");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyImgTarget = document.querySelector(".currency-img-to"); // Classe corrigida

// Matriz de taxas fictícias em relação à base cambial do Real (BRL)
const baseRatesInBRL = { BRL: 1.0, USD: 5.20, EUR: 5.60, CHF: 5.85, GBP: 6.50 };

// Dicionário de internacionalização e caminhos de arquivos de imagem
const currencyConfigs = {
    BRL: { locale: "pt-BR", label: "Real Brasileiro", flag: "brazil-flag.png" },
    USD: { locale: "en-US", label: "Dólar Americano", flag: "united-states-flag.png" },
    EUR: { locale: "de-DE", label: "Euro", flag: "euro.png" },
    CHF: { locale: "de-CH", label: "Franco Suíço", flag: "chf-flag.png" },
    GBP: { locale: "en-GB", label: "Libra Esterlina", flag: "gbp-flag.png" }
};

function performConversion() {
    console.log("Processamento de conversão acionado!");
    
    let rawValue = inputCurrency.value;
    let cleanValue = rawValue.replace(",", ".");
    const inputAmount = parseFloat(cleanValue);

    if (isNaN(inputAmount)) return;

    const fromCurrency = selectFrom.value;
    const toCurrency = selectTo.value;

    // Lógica cruzada mão dupla
    const amountInBRL = inputAmount * baseRatesInBRL[fromCurrency];
    const finalResult = amountInBRL / baseRatesInBRL[toCurrency];

    // Formatação regional automática de decimais e símbolos mundiais
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(currencyConfigs[fromCurrency].locale, {
        style: "currency", currency: fromCurrency
    }).format(inputAmount);

    currencyValueConverted.innerHTML = new Intl.NumberFormat(currencyConfigs[toCurrency].locale, {
        style: "currency", currency: toCurrency
    }).format(finalResult);
}

function updateInterfaceLayout() {
    console.log("Mudança de estado nos menus select detectada!");
    
    const fromCurrency = selectFrom.value;
    const toCurrency = selectTo.value;

    // Rotação dinâmica de nomes e arquivos de imagem
    currencyNameFrom.innerHTML = currencyConfigs[fromCurrency].label;
    currencyImgFrom.src = `./assets/${currencyConfigs[fromCurrency].flag}`;

    currencyNameTarget.innerHTML = currencyConfigs[toCurrency].label;
    currencyImgTarget.src = `./assets/${currencyConfigs[toCurrency].flag}`;

    performConversion();
}

convertButton.addEventListener("click", performConversion);
selectFrom.addEventListener("change", updateInterfaceLayout);
selectTo.addEventListener("change", updateInterfaceLayout);
