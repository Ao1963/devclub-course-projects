// 1. SELEÇÃO DE ELEMENTOS DO DOM
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
const choiceButtons = document.querySelectorAll(".js-choice");
// 2. ESTADO DO JOGO (Placar)
let score = { player: 0, computer: 0 };
// Mapeamento visual para renderização
const TOKEN_STYLES = {
  rock: { emoji: "✊", class: "token-btn--rock" },
  paper: { emoji: "✋", class: "token-btn--paper" },
  scissors: { emoji: "✌️", class: "token-btn--scissors" },
};
// 3. FUNÇÕES DE LÓGICA
const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};
const playRound = (playerChoice) => {
  const machineChoice = playMachine();
  // Mostra a arena e esconde os controles
  controlsSection.classList.add("is-hidden");
  arenaSection.classList.add("is-playing");
  // Renderiza a escolha do jogador
  renderToken(playerToken, playerChoice);
  // Efeito de delay para a CPU "pensar"
  setTimeout(() => {
    renderToken(computerToken, machineChoice);
    checkWinner(playerChoice, machineChoice);
  }, 500);
};
const checkWinner = (human, machine) => {
  let result = "";
  if (human === machine) {
    result = "DRAW";
  } else if (
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper")
  ) {
    result = "YOU WIN";
    score.player++;
  } else {
    result = "YOU LOSE";
    score.computer++;
  }
  // Atualiza Placar e Texto
  playerScoreEl.textContent = score.player;
  computerScoreEl.textContent = score.computer;
  resultText.textContent = result;
  // Mostra o resultado final da rodada
  arenaSection.classList.add("has-result");
  resultDisplay.classList.remove("is-hidden");
};
const renderToken = (element, choice) => {
  element.className = `game-arena__token ${TOKEN_STYLES[choice].class}`;
  element.textContent = TOKEN_STYLES[choice].emoji;
};
// 4. CONTROLE DE INTERFACE
const setupNextRound = () => {
  arenaSection.classList.remove("is-playing", "has-result");
  resultDisplay.classList.add("is-hidden");
  controlsSection.classList.remove("is-hidden");
  // Limpa os tokens da arena
  playerToken.className = "game-arena__token is-empty";
  playerToken.textContent = "";
  computerToken.className = "game-arena__token is-empty";
  computerToken.textContent = "";
};
const resetGame = () => {
  console.log("Reiniciando o jogo...");
  score = { player: 0, computer: 0 };
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  setupNextRound();
};
// 5. EVENT LISTENERS (Escutadores de eventos)
choiceButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Captura o ID do botão (rock, paper ou scissors)
    const playerChoice = event.currentTarget.id;
    playRound(playerChoice);
  });
});
btnNext.addEventListener("click", setupNextRound);
btnReset.addEventListener("click", resetGame);
