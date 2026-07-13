// prettier-ignore

/*
Exemplo1:

function sayMyName(name) {
    return `Seu nome é ${name}`
}

const sayMyName2 = (name) => `Seu nome é ${name}`

console.log(sayMyName('Anselmo'))
console.log(sayMyName2('Antônia'))
*/

/*Exemplo2:

function sayMyName(name){
    return `Seu nome é ${name}`
}

const sayMyName2 = name => `Seu nome é ${name}` //apenas um parâmetro não precisa de parênteses.

console.log(sayMyName('Anselmo'))
console.log(sayMyName2('Antônia'))
*/

/*
Exemplo3:

function sayMyName(name, nickname){
    return `Meu nome é ${name} (vulgo ${nickname})`
}

const sayMyName2 = (name, nickname) => `Meu nome é ${name} (vulgo ${nickname})` //dois parâmetros, precisa de parênteses

console.log(sayMyName('Anselmo', 'Oliveira'))
console.log(sayMyName2('Antônia', 'Tom'))
*/

/*Exemplo4:

function sayMyName(name) {
    return `Seu nome é ${name}`
}

const sayMyName2 = (name) => {
   return `Seu nome é ${name}`
} //se for necessário mais linhas, tem que usar as chaves

console.log(sayMyName('Anselmo'))
console.log(sayMyName2('Antônia'))
*/

/*
Exemplo5:

function sum (number1, number2){
    return number1 + number2
}

const sum2 = (number1, number2) => number1 + number2

console.log(sum(32,26))
console.log(sum2(31,31))
*/

/* =========================================================================
   🚀 AULA: FUNÇÕES ANÔNIMAS (Evolução Sintática em Callbacks)
   ========================================================================= */
/*
// DECLARAÇÕES DE SUPORTE: Necessárias para o Node.js não quebrar a execução
const sampleArray =;
const delayTime = 3000;
 // 3 segundos para o temporizador

// -------------------------------------------------------------------------
// 🧩 Exemplo 1: Modern Anonymous Arrow Function no forEach
// -------------------------------------------------------------------------
// O forEach recebe uma função moderna que não tem nome (anônima)
sampleArray.forEach(element => {
    console.log(`Exemplo 1 (Arrow Anônima) -> Elemento: ${element}`);
});


// -------------------------------------------------------------------------
// 🧩 Exemplo 2: Traditional Anonymous Function no forEach
// -------------------------------------------------------------------------
// O forEach trabalha com a sintaxe antiga, omitindo o nome da função
sampleArray.forEach(function (element) {
    console.log(`Exemplo 2 (Tradicional Anônima) -> Elemento: ${element}`);
});


// -------------------------------------------------------------------------
// 🧩 Exemplo 3: Nested Modern & Traditional Anonymous Functions
// -------------------------------------------------------------------------
// O setInterval executa um bloco de código repetidamente a cada intervalo
const intervalId = setInterval(() => {
    console.log("\n--- Disparando o loop do Exemplo 3 ---");

    sampleArray.forEach(function (element) {
        console.log(`Exemplo 3 (Aninhada) -> Elemento: ${element}`);
    });

    // Interrompe o temporizador imediatamente após a primeira execução para não travar o terminal
    clearInterval(intervalId);
}, delayTime);


// -------------------------------------------------------------------------
// 🧩 Exemplo 4: Traditional Anonymous Function no setTimeout
// -------------------------------------------------------------------------
// Correção: Mapeado para setTimeout conforme sua nota, usando a escrita antiga
setTimeout(function() {
    console.log("\nExemplo 4 -> Executado uma única vez após o delay!");
}, delayTime);
*/

/* =========================================================================
   🚀 AULA: PROJETO FUNCTIONS pt.1
   ========================================================================= */
// Observação, vou fazer todas as aulas, coleto os dados e informações, daí desenvolvemos todas as marcações e códigos.

// Exercício HTML
// Vamos desenvolver um projeto de funções para um Jokempõ, aonde vamos ter que construir o html do jogo,
// com um h1, três botões, o primeiro da esquerda com um emoji do punho cerrado, o segundo no centro com o emoji da mão aberta, o terceiro da direita com o sinal de paz e amor.
// Deve existir um background para cada emoji, e um som para cada botão. O site sugerido pelo DevClub é o "Quackit", mas estamos livres para inovar.
// Também vamos ter dois parágrafos para as pontuações.
// O primeiro para o jogador ter a sua pontuação,
// o segundo para a machine ter a sua pontuação.
// ambos devem ter a tag <span> com a pontuação.
// Vamos a marcação em HTML:

/*
<title>DevCllub Jokempô</title>
<body>
        <div class="container">
            <h1>Jokempô</h1>

            <div class="buttons">
                <button id="rock" onclick="playHuman(`rock`)">&#x1F44A;</button>
                <button id="paper" onclick="playHuman(`paper`)">&#x1f590;</button>
                <button id="scissors" onclick="playHuman(`scissors`)">&#x270c;</button>
            </div>
            <p class="result"></p>

<!-- Antes era: <p class="your-score">Minha Pontuação: ... -->
            <p class="my-score">Minha Pontuação: <span id="human-score">0</span></p>
            <p class="machine-score">Pontuação da Máquina: <span id="machine-score">0</span></p>
        </div >
        <script src="script.js"></script>
</body>
*/

// </body><p>Minha Pontuação: <span>0</span></p>
// <p>Maquina Pontuação: <span>0</span></p>
// no body, criamos uma <div class="container">
// <button id="rock">&#x1F44A;</button>
// <button id="paper">&#x1f590;</button>
// <button id="scissors">&#x270c;</button>
// </div>

/* =========================================================================
   🚀 AULA: PROJETO FUNCTIONS pt.2
   ========================================================================= */

// Para o CSS, devemos usar o arquivo style.css, com o link dentro do html. Então, acima do título, vamos colocar o link para o css.
// O asterisco, com as margens zeras, vai fazer com que o css seja aplicado em toda a pagina.
// o body! Será usado um background com uma url(""); para ficar com uma imagem de fundo, todas as vezes que reiniciamos o navegador muda o fundo.
// Como sugestão, https://source.unsplash.com/1600x900/?landscape. Mas, podemos usar outro.
// Se por algum motivo a tela nao tiver 1600x900, ou seja, o background vai ficar com o tamanho da tela, podemos usar o background-size: cover;
// Para centralizar, vamos usar display: flex;. Então, devemos usar justify-content: center; e align-items: center;
// usar também o min-height: 100vh (tela toda); para que o fundo ocupe toda a tela.

/*
Agora, vamos executar o jokempô

.container {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.buttons {
    margin: 30px 0;
    display: flex;
    gap: 40px;
}
button {
    padding: 10px;
    font-size: 50px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    transition: opacity 0.5s ease-in-out;
}

button:hover {
    opacity: 0.8;
}

#rock {
    background-color: #FFB6C1;
}

#paper {
    background-color: #BDE0FE;
}

#scissors {
    background-color: #FEEB77;
}

p {
    font-weight: bold;
    margin-bottom: 10px;
}

.your-score span {
    color: #0000FF;
}
.machine-score span {
    color: #FF0000;
}
*/

/*
Orientações na plataforma:

AVISO IMPORTANTE - Atualização do Link de Background Dinâmico
Olá, pessoal!

Identificamos que o link de background dinâmico disponibilizado na aula não está mais funcionando. Isso pode acontecer quando APIs gratuitas são descontinuadas ou passam por manutenção.

Links Alternativos Funcionando:
Para continuar com seu projeto, utilize uma das opções abaixo:

1. Picsum Photos (RECOMENDADO)
https://picsum.photos/1920/1080
- Mais estável e confiável
- Carregamento rápido
- Imagens de alta qualidade

2. Unsplash Source
https://unsplash.com
- Permite escolher temas específicos
- Substitua "landscape" por: nature, city, technology, etc.

3. Para imagem fixa específica
https://picsum.photos/id/10/1920/1080
Use quando quiser uma imagem específica (mude o número do ID)

Como implementar:
Substitua o link antigo no seu CSS por qualquer uma das opções acima:

css:
background-image: url('https://picsum.photos/1920/1080');
*/

/* =========================================================================
   🚀 AULA: PROJETO FUNCTIONS pt.3
   ========================================================================= */
//Para o JavaScript, vamos usar o arquivo script.js, já com o link dentro do html.

//Orientações, dando indteligência ao projeto: 1. pratique, 2. faça por parte
//Primeiro, usando o JavaScript, tenho que clicar no botão de pedra, papel ou tesoura,
// porque chegou a informação no html e o jogo vai dar um resultado.
//Segundo, devo conseguir mostrar os resultados da machine, fazendo por partes e aos poucos vou evoluindo no projeto.
//Preciso clicar no botão de pedra, papel ou tesoura, e depois mostrar o resultado na tela, conseguindo chegar essa informação no html.
//Depois é conseguir a jogada da machine, e depois mostrar essa informação na tela.
//Utilizando o comando maph.random(), vou gerar um numero aleatorio entre 0 e 2, e esse numero vai ser o que eu vou usar para definir a jogada da machine.
//Por fim, podemos agora somar pontos para humanos e para machine.
//Vamos também revisitar vários conceietos anteriores, como o if, else if, else, switch, etc.
//Primeiro vou criar no html, um script para executar o jokempô.
/*
const result = document.querySelector('.result')
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  console.log(humanChoice);

  playTheGame(humanChoice, playMachine);
};

const playMachine = () => {
  const choice = [`rock`, `paper`, `scissors`];
  const randomNumber = Math.floor(Math.random() * 3);

  return choice[randomNumber];
}; //criar a jogada da machine

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " | Máquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Empate 🤝";
  } else if (
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você Ganhou! 🎉";
  } else {
    // Se não deu empate e o humano não ganhou, a máquina venceu obrigatoriamente
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você Perdeu! 😢";
  }
};
*/
//Se o result fosse uma imagem, deveríamos usar uma imagem, ou seja, podemos criar.

//Agora falta ser colocado as condições de quando o humano ganha.

//Análise do Jokempô:
/*
pedra ganha de tesoura
pedra perde de papel
papel ganha de pedra
tesoura ganha de papel
*/

//Vamos fazer o Jokempô pontuar, ajustando o html, o css e o script.js.

/* =========================================================================
⚠️ DESAFIO EXTRA CLASSE: Montar a lógica dentro dos parênteses do IF
   ========================================================================= */

/*
const idadeCliente = 19
const estaAcompanhado = false
const temDinheiro = true

if (
    (idadeCliente >= 18 && temDinheiro) || // Cenário 1: Adulto com grana
    (idadeCliente < 18 && estaAcompanhado && temDinheiro) // Cenário 2: Menor acompanhado com grana
) {
    console.log("Ingresso liberado! Bom filme. 🎬")
}
else {
    console.log("Venda bloqueada. ❌")
}
*/

//ENUM

//Todas as vezes que for necessário usar várias palavras em um projeto,
//como diversos arquivos de diversos códigos e então vamos usar o ENUM,
//aonde podemos colocar todos os valores de uma vez só.
//Quando vamos usar essa variável, que se chama ENUM,
//podemos usar o formato  SNAKE_CASE.

//Exemplo1:
/*
const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};
*/

/* =========================================================================
   🚀 AULA: MAP
   ========================================================================= */
/*
MAP - FILTER - REDUCE

São métodos nativos de arrays no JavaScript usados para manipular dados de forma declarativa e em conformidade com os princípios da programação funcional.

Eles substituem os laços de repetição tradicionais (como for e while) por blocos de código mais limpos, focando em o que precisa ser feito, em vez de como o computador deve iterar sobre a estrutura.

Map

Significado: Mapeia (transforma) cada item de um array original e retorna um novo array contendo os resultados. O tamanho do novo array é sempre idêntico ao original.

Objetivo: Converter, formatar ou extrair dados de uma lista sem alterar os dados originais.

Vantagem: Evita mutações acidentais e reduz linhas de código, mantendo a estrutura original intacta.

Uso indicado: Converter valores monetários (ex: de número para string formatada), extrair apenas propriedades específicas de uma lista de objetos, ou aplicar descontos a produtos em um carrinho.
*/

//O Map mapeia os elementos de um array, aplicando uma função a cada elemento e retornando um novo array com os resultados.
//Map é uma função de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array original. É muito útil para transformar dados.
// MAP => Mapear o nosso array.
//    - Cria um novo array, a partir do array original, percorrido
//    - Cria um novo array, com a mesma quantidade de itens do array original
//    - Aceita 3 parâmetros: o item do array atual, o index e o array completo

//Exemplo1 (Windsurf):
/*
const numbers = [1, 2, 3, 4, 5];
//
const doubledNumbers = numbers.map((num) => num * 6);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
*/

//Exemplo do Professor Rodolfo
/*
const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
  console.log(item + " -> item");
  console.log(index + " -> index");
  console.log(arrayOriginal + " -> arrayOriginal");

  const newItem = item * 10;
  return newItem;
});

console.log(number);
console.log(double);
*/

/* =========================================================================
   🚀 AULA: MAP pt.2
   ========================================================================= */

/*
const list = [
{ name: 'Anselmo', vip: true },
{ name: 'Antônia', vip: false },
{ name: 'João', vip: true },
{ name: 'Maria', vip: false },
{ name: 'Letícia', vip: true },
{ name: 'Joana', vip: false },
{ name: 'Pedro', vip: true },
{ name: 'Lucas', vip: false },
]

*/

/*
//Exemplo1:
// abaixo leia as informações.
//Este foi criado dentro do map, 
// mas poderia ser criado fora do map, 
// então, dentro do map, apenas chamar a variável.

const newLIst = list.map((user) => {
  let braceletColor;

  const newUser = {
    name: user.name,
    braceletColor: user.vip ? "Black" : "Green",
  };
*/

/*
//Exemplo2:
// Vamos criar um if, fora do map, para definir a cor da pulseira, de outra forma, caso o usuário seja VIP ou não.

const newLIst = list.map((user) => {
  let braceletColor;

  if (braceletColor === true) {
    braceletColor = "Black";
  } else {
    braceletColor = "Green";
  }
  // No if acima, no true neste caso está redundante.

  const newUser = {
    name: user.name,
    braceletColor: braceletColor,
  };

  return newUser;
});
*/

//console.log(newLIst);

//Exemplo3:
// Vamos criar uma lista de alunos, como notas. Criar um if, fora do map, para definir se o aluno foi aprovado ou não, aonde a lista de notas dos alunos, varia de 0 a 10.
// Mas quem tirar 7 ou mais, está aprovado, vamos criar um novo array, aonde vamos colocar o nome do aluno e se ele foi aprovado ou não.
/*
const students = [
  { name: "Anselmo", grade: 8 },
  { name: "Antônia", grade: 6 },
  { name: "João", grade: 7 },
  { name: "Maria", grade: 5 },
  { name: "Letícia", grade: 9 },
  { name: "Joana", grade: 4 },
  { name: "Pedro", grade: 10 },
  { name: "Lucas", grade: 3 },
];
*/


/*
const newStudentsList = students.map((student) => {
  let status;

  if (student.grade >= 7) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }

  const newStudent = {
    name: student.name,
    status: status,
  };

  return newStudent;
});

console.log(newStudentsList);
*/

//Agora, vou criar um novo array, com o ternário, para verificar se o aluno foi aprovado ou não.
/*
const newStudentsListTernary = students.map((student) => ({
  name: student.name,
  status: student.grade >= 7 ? "Aprovado" : "Reprovado",
}));

console.log(newStudentsListTernary);
*/