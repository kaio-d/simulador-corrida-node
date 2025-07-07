const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

(async function main() {
  console.log(
    `🏁 🚨 Corrida entre ${player1.nome} e ${player2.nome} começando ... \n`
  );

  await playRaceEngine(player1, player2);
})();

async function playRaceEngine(playerOne, playerTwo) {
  for (let i = 1; i <= 5; i++) {
    console.log(`🏁 Rodada ${i}`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);
  }

  let diceResult1 = await rollDice();
  let diceResult2 = await rollDice();

  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;

  if (result === "Reta") {
    totalTestSkill1 = diceResult1 + player1.velocidade;
    totalTestSkill2 = diceResult2 + player2.velocidade;
  }

  if (result === "Curva") {
    totalTestSkill1 = diceResult1 + player1.manobrabilidade;
    totalTestSkill2 = diceResult2 + player2.manobrabilidade;
  }

  if (result === "Confronto") {
  }
}

async function getRandomBlock() {
  let random = Math.random();
  let result = "";

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;

    case random < 0.66:
      result = "Curva";
      break;

    default:
      result = "Confronto";
      break;
  }

  return result;
}
