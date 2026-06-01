console.clear(); // Mantém o console do seu Mac limpo

// =========================================================================
// 🗄️ PASSO 1: Banco de Dados de Contatos (Blindado contra falhas de rede)
// =========================================================================
const contactDatabase = [
    { name: "Maria", role: "Frontend Engineer", email: "maria.dev@tech.com", avatar: "🤖" },
    { name: "Aline", role: "UI/UX Designer", email: "aline.design@tech.com", avatar: "🦊" },
    { name: "João", role: "Backend Developer", email: "joao.node@tech.com", avatar: "👾" },
    { name: "Carolina", role: "Product Manager", email: "carol.pm@tech.com", avatar: "👩‍💻" },
    { name: "Pedro", role: "DevOps Specialist", email: "pedro.ops@tech.com", avatar: "🚀" }
];

// =========================================================================
// 🎯 PASSO 2: Mapeamento de Nós do DOM (Seletores)
// =========================================================================
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const resultSection = document.getElementById("result-section");

const contactNameDisplay = document.getElementById("contact-name");
const contactRoleDisplay = document.getElementById("contact-role");
const contactEmailDisplay = document.getElementById("contact-email");
const contactAvatarDisplay = document.querySelector(".avatar");

// =========================================================================
// 🔍 PASSO 3: O Motor de Busca com Laço FOR (Resolução do Desafio)
// =========================================================================
function scanContactDirectory() {
    const userQuery = searchInput.value.trim();

    if (userQuery === "") {
        alert("Please enter a name to execute the directory scan.");
        return;
    }

    console.log(`Iniciando varredura no banco para o termo: "${userQuery}"`);
    let contactFound = false;

    for (let i = 0; i < contactDatabase.length; i++) {
        if (contactDatabase[i].name.toLowerCase() === userQuery.toLowerCase()) {
            console.log(`🏆 Contato localizado no índice ${i}: ${contactDatabase[i].name}`);
            
            // Injeta as informações de texto limpas
            contactNameDisplay.innerHTML = contactDatabase[i].name;
            contactRoleDisplay.innerHTML = `💼 ${contactDatabase[i].role}`;
            contactEmailDisplay.innerHTML = `✉️ ${contactDatabase[i].email}`;
            
            // INJEÇÃO BLINDADA: Substitui o conteúdo do círculo pelo avatar local infalível
            contactAvatarDisplay.innerHTML = contactDatabase[i].avatar;
            
            resultSection.className = "result-visible";
            contactFound = true; 
            break; 
        }
    }

    if (!contactFound) {
        console.log(`❌ Varredura concluída. Nenhum engenheiro chamado "${userQuery}" foi encontrado.`);
        alert("Contact not found in our global technical directory.");
        resultSection.className = "result-hidden"; 
    }
}

// =========================================================================
// ⚡ PASSO 4: Ouvintes de Evento (Click do Mouse + Enter do Teclado)
// =========================================================================
searchButton.addEventListener("click", scanContactDirectory);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        scanContactDirectory();
    }
});
