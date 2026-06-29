const controlsSection = document.getElementById("controls-section");
const arenaSection = document.querySelector(".game-arena");
const playerToken = document.getElementById("player-token");
const computerToken = document.getElementById("computer-token");
const resultDisplay = document.getElementById("result-display");
const resultText = document.getElementById("result-text");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");

const btnNext = document.getElementById("btn-next");
const btnReset = document.getElementById("btn-reset");
const choiceButtons = document.querySelectorAll(".token-btn");

// Mapeamento visual de emojis e estilos para renderização dinâmica
const TOKEN_STYLES = {
  rock: { emoji: "✊", class: "token-btn--rock" },
  paper: { emoji: "✋", class: "token-btn--paper" },
  scissors: { emoji: "✌️", class: "token-btn--scissors" },
};

/**
 * Atualiza visualmente o token na arena
 */
const renderToken = (element, choice) => {
  element.className = `game-arena__token ${TOKEN_STYLES[choice].class}`;
  element.textContent = TOKEN_STYLES[choice].emoji;
};

/**
 * Controla o fluxo de cliques nas jogadas
 */
function handlePlayerChoice(event) {
  // Captura o ID ou valor do botão clicado (ex: 'pedra', 'papel' ou 'tesoura')
  const playerChoice = event.target.id;

  // Agora que playerChoice existe, podemos chamar a função playRound
  playRound(playerChoice);
}

// Executa a lógica de negócio do jogo
// Adicione esta função no seu script.js para resolver o erro
function playRound(playerChoice) {
  const choices = ["pedra", "papel", "tesoura"];
  // LINHA 40: Note que agora usamos os pontos e o multiplicador 3 corretamente
  const machineChoice = choices[Math.floor(Math.random() * 3)];

  console.log("Você: " + playerChoice + " | Máquina: " + machineChoice);

  if (playerChoice === machineChoice) {
    alert("Empate! 🤝");
  } else if (
    (playerChoice === "pedra" && machineChoice === "tesoura") ||
    (playerChoice === "papel" && machineChoice === "pedra") ||
    (playerChoice === "tesoura" && machineChoice === "papel")
  ) {
    alert("Você ganhou! 🏆");
  } else {
    alert("Você perdeu! 🤖");
  }
  // Localize sua função handlePlayerChoice ao redor da linha 60
  function handlePlayerChoice(event) {
    // CAPTURA: Definimos a variável playerChoice a partir do ID do botão clicado
    const playerChoice = event.target.id;

    // LINHA 65: Agora chamamos a playRound passando a variável que acabamos de criar
    playRound(playerChoice);
  }

  // Efeito de delay suave simulando o pensamento da CPU
  setTimeout(() => {
    renderToken(computerToken, computerChoice);

    // Exibe o placar e resultado após a escolha da CPU
    playerScoreEl.textContent = currentScore.player;
    computerScoreEl.textContent = currentScore.computer;

    resultText.textContent =
      result === "Empate"
        ? "IT'S A TIE"
        : `YOU ${result === "Vitória" ? "WIN" : "LOSE"}`;
    arenaSection.classList.add("has-result");
    resultDisplay.classList.remove("is-hidden");
  }, 400);

  /**
   * Limpa o estado visual da arena para a próxima rodada
   */
  const setupNextRound = () => {
    arenaSection.classList.remove("is-playing", "has-result");
    resultDisplay.classList.add("is-hidden");
    controlsSection.classList.remove("is-hidden");

    playerToken.className = "game-arena__token is-empty";
    playerToken.textContent = "";
    computerToken.className = "game-arena__token is-empty";
    computerToken.textContent = "";
  };

  function resetGame() {
    console.log("Resetando...");
    window.location.reload();
  } // <--- Este carinha salva o código

  // Event Listeners
  choiceButtons.forEach((button) =>
    button.addEventListener("click", handlePlayerChoice),
  );
  btnNext.addEventListener("click", setupNextRound);
  btnReset.addEventListener("click", handleReset);
}
