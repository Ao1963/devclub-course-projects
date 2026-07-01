// Organização em Objeto (Saindo da caixinha)
const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const result = document.querySelector(".result");

// Função de sorteio minimalista
const playMachine = () => {
  const choices = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS,
  ];
  return choices[Math.floor(Math.random() * 3)];
};

// Lógica de Jogo Inteligente (Menos é Mais)
const playTheGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Empate! 🤝";
  } else if (
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    result.innerHTML = "Você Ganhou! 🏆";
  } else {
    result.innerHTML = "A Máquina Ganhou! 🤖";
  }
};
