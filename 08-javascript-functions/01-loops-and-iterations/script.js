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
