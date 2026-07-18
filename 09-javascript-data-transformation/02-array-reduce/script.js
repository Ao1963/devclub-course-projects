/* =========================================================================
   🚀 MODULE 09: JAVASCRIPT DATA TRANSFORMATION
   📌 TOPIC: .reduce() Method Fundamentals & Live Financial System
   ========================================================================= */

// --- PHASE 1: CORE MATHEMATICAL REDUCTIONS (STUDY BENCHMARKS) ---

/*
// Example 1 & 2: Primitive Array Sum & Accumulator Inspection
const list =;
const sum = list.reduce((accumulator, currentValue) => {
  // console.log(`${accumulator} acc | ${currentValue} currentValue`);
  return accumulator + currentValue;
}, 0);
console.log("Simple Sum:", sum);

// Example 3: Enterprise Market Value Aggregation
const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
  { name: "Netflix", marketValue: 899, CEO: "Reed Hastings", foundedOn: 1997 },
  { name: "Google", marketValue: 139, CEO: "Sundar Pichai", foundedOn: 1998 },
];
const totalMarketValue = companies.reduce((acc, company) => acc + company.marketValue, 0);
console.log("Total Corporate Market Value:", totalMarketValue);

// Example 4: Basic Weight Price Calculation
const groceryCart = [
  { productName: "Abóbora", valuePerKg: 4.9, kg: 1 },
  { productName: "Banana", valuePerKg: 6.9, kg: 2 },
  { productName: "Abacaxi", valuePerKg: 12.9, kg: 2 },
  { productName: "Melancia", valuePerKg: 9.9, kg: 5 },
  { productName: "Laranja", valuePerKg: 2.9, kg: 10 },
];
const groceryTotal = groceryCart.reduce((acc, item) => acc + (item.valuePerKg * item.kg), 0);
console.log("Grocery Total Cost:", groceryTotal);
*/

// --- PHASE 2: PRODUCTION STANDARD - LIVE FINANCIAL DASHBOARD ---

const cart = [
  { productName: "iPhone", price: 5000, quantity: 1 },
  { productName: "Samsung", price: 3500, quantity: 2 },
  { productName: "Xiaomi", price: 1200, quantity: 3 },
  { productName: "OnePlus", price: 3000, quantity: 5 },
  { productName: "Motorola", price: 1500, quantity: 10 },
];

async function runFinancialDashboard() {
  console.log("🔄 Fetching real-time global exchange rates...");

  // 1. Taxa padrão de contingência (caso o servidor caia, seu código não quebra)
  let exchangeRate = 5.11;

  try {
    const response = await fetch(
      "https://economia.awesomeapi.com.br/last/USD-BRL",
    );

    // VERIFICAÇÃO DE SEGURANÇA: Se o servidor não responder com sucesso (Status 200)
    if (!response.ok) {
      throw new Error(`Server returned status code ${response.status}`);
    }

    const data = await response.json();
    exchangeRate = parseFloat(data.USDBRL.bid);
    console.log(
      `✅ Current Market Rate Linked: 1 USD = R$ ${exchangeRate.toFixed(2)}\n`,
    );
  } catch (error) {
    // CAPTURA DE FALHA: O código avisa o erro, mas continua rodando usando o valor padrão de 5.11
    console.log(
      `⚠️ External API Offline: Using fallback rate (R$ ${exchangeRate.toFixed(2)}). Reason: ${error.message}\n`,
    );
  }

  // 2. O restante do processamento continua normalmente abaixo
  try {
    const formatBRL = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const formatUSD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const convertBrlToUsd = (valueInBrl) => valueInBrl / exchangeRate;

    const itemsTableData = cart.map((item) => {
      const totalBRL = item.price * item.quantity;
      const totalUSD = convertBrlToUsd(totalBRL);

      return {
        Product: item.productName,
        "Unit Price": formatBRL.format(item.price),
        Qty: item.quantity,
        "Total (BRL)": formatBRL.format(totalBRL),
        "Total (USD)": formatUSD.format(totalUSD),
      };
    });

    console.log("--- METRICS PER ITEM PRODUCT ---");
    console.table(itemsTableData);

    const totalGeneralBRL = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const totalGeneralUSD = convertBrlToUsd(totalGeneralBRL);

    console.log("\n--- COMBINED CART FINAL AGGREGATION ---");
    console.log(` Gross Total BRL : ${formatBRL.format(totalGeneralBRL)}`);
    console.log(` Gross Total USD : ${formatUSD.format(totalGeneralUSD)}`);
    console.log(
      "=========================================================================\n",
    );
  } catch (innerError) {
    console.error(
      "❌ Failed to resolve dynamic financial metrics:",
      innerError.message,
    );
  }
}

// 🚀 GATILHO INDISPENSÁVEL PARA EXECUTAR O SCRIPT NO TERMINAL:
runFinancialDashboard();
