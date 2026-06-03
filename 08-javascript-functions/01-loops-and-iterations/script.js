console.clear(); // Mantém o console do Mac limpo a cada teste

// =========================================================================
// 🔄 TOPIC 01: The Standard FOR Loop (O Laço Tradicional por Índice)
// =========================================================================
console.log("--- STARTING STANDARD FOR LOOP ---");

/*
   ANATOMIA COMPLETA CONFORME SUAS ANOTAÇÕES:
   - Inicialização: let i = 1 (Ponto de partida)
   - Condição: i <= 5 (Itera ENQUANTO for verdadeiro)
   - Expressão Final: i++ (Modificação a cada volta completa)
*/

for (let i = 1; i <= 5; i++) {
    console.log(`🔄 Iteração número: ${i} processada com sucesso.`);
}

console.log("--- STANDARD FOR LOOP FINISHED ---");

/* 
   RECRUITER NOTE: 
   The traditional 'for' loop offers maximum performance for index-based evaluation.
   Always verify the boundary expression (i <= threshold) to mitigate risk of infinite execution threads.
*/

// =========================================================================
// 🔄 TOPIC 02: Incremental vs. Decremental Loops (Crescente e Regressivo)
// =========================================================================
console.log("\n--- EXEMPLO 1: CONTAGEM CRESCENTE ---");

// Vai rodar de 0 até 14
for (let i = 0; i < 15; i++) {
    console.log(`Crescente (i++): ${i}`);
}

console.log("\n--- EXEMPLO 2: CONTAGEM REGRESSIVA ---");

// Vai rodar de 20 decrescendo até o 3 (para antes de chegar no 2)
for (let i = 20; i > 2; i--) {
    console.log(`Regressivo (i--): ${i}`);
}

/* 
   RECRUITER NOTE: 
   Mastering decremental indexes (i--) is essential for reverse array parsing 
   and strict countdown lifecycle behaviors within real-world dynamic engines.
*/

// =========================================================================
// 🔄 TOPIC 03: Array Automation via .length (O Desafio dos Usuários)
// =========================================================================
console.log("\n--- EXECUTANDO O DESAFIO FOR (AUTOMAÇÃO) ---");

// Array dinâmico (O .length se ajusta sozinho se a lista crescer ou encolher!)
const users = ["Maria", "Aline", "João", "Carolina", "Pedro"];

/*
   A MÁGICA DE ESCALA:
   - i começa em 0 (Porque o primeiro índice de um Array é sempre 0)
   - Itera ENQUANTO i for menor que users.length (Que vale 5)
   - users[i] vai ler dinamicamente: users[0], users[1], users[2]...
*/
for (let i = 0; i < users.length; i++) {
    // SINTAXE CORRIGIDA: Mudado de .lenght para .length
    console.log(`👤 Usuário encontrado no banco: ${users[i]}`);
}

console.log(`\n📊 Diagnóstico de Escala: O array possui o tamanho real de ${users.length} elementos.`);

/* 
   RECRUITER NOTE: 
   Using array.length within a 'for' loop condition ensures structural elasticity.
   Always verify correct property spelling ('length') to prevent silent loop skips 
   where evaluation predicates instantly drop execution to false during runtime initialization.
*/

// =========================================================================
// 🔄 TOPIC 04: The Modern FOR OF Loop (Iteração Simplificada de Elementos)
// =========================================================================
console.log("\n--- STARTING FOR OF EVALUATIONS ---");

// 1. Iterando sobre uma String (Letra por Letra)
const myName = "Rodolfo";
console.log(`\n🔤 Scanning string variables for: ${myName}`);
for (const letter of myName) {
    console.log(letter);
}

// 2. Iterando sobre um Array Primitivo
const arrayUsers = ["João", "Maria", "Letícia"];
console.log("\n👥 Scanning user matrices:");
for (const name of arrayUsers) {
    console.log(name);
}

// 3. O Motor de Busca Otimizado (Refatorado e Livre de Bugs)
console.log("\n🔍 Running Explicit Directory Match Engine:");

const contacts = [
    { name: "João", number: "1199999-9991" },
    { name: "Maria", number: "1199999-9992" },
    { name: "Letícia", number: "1199999-9993" }
];

const simulatedInputValue = "Maria"; 
let contactFoundFlag = false;

for (const contact of contacts) {
    if (simulatedInputValue.toLowerCase() === contact.name.toLowerCase()) {
        console.log(`🏆 Contato Encontrado -> Nome: ${contact.name} | Tel: ${contact.number}`);
        contactFoundFlag = true;
        break; // LÓGICA DE PRODUÇÃO ENXUTA: Economiza processamento!
    }
}

if (!contactFoundFlag) {
    console.log("❌ Contato não encontrado, tente outra vez.");
}

/* 
   RECRUITER NOTE: 
   The 'for...of' statement creates a loop iterating over iterable objects.
   It enforces maximum readability by eliminating internal counter overhead indexers.
   Always pair array searches with early 'break' routines to drop memory thread cycles.
*/

// =========================================================================
// 🔄 TOPIC 05: The FOR IN Loop (Varredura de Propriedades de Objetos)
// =========================================================================
console.log("\n--- STARTING FOR IN EVALUATIONS ---");

const userProfile = { 
    name: "Anselmo", 
    age: 62, 
    street: "Rua dos Laços" 
};

console.log("🧩 Forma 1: Acesso direto por ponto (userProfile.name):", userProfile.name);
console.log("🧩 Forma 2: Acesso estático por colchetes (userProfile['name']):", userProfile['name']);

console.log("\n🔄 Iniciando a varredura dinâmica das chaves:");

// O loop extrai dinamicamente as chaves: "name", "age" e "street"
for (const key in userProfile) {
    // SINAL VERDE: Usando a interpolação por crases conforme sua última evolução anotada!
    console.log(`🔑 Propriedade (Chave): ${key} | 🚪 Valor Acessado: ${userProfile[key]}`);
}

/* 
   RECRUITER NOTE: 
   The 'for...in' loop iterates over all enumerable string properties of an object.
   Do not use 'for...in' to iterate over Arrays where index order is mathematically vital.
   Combining dynamic object keys via bracket notation (object[key]) avoids dynamic evaluation hacks.
*/
