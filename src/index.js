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
  await declareWinner(player1, player2);
})();

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

async function playRaceEngine(playerOne, playerTwo) {
  for (let i = 1; i <= 5; i++) {
    console.log(`🏁 Rodada ${i}`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "Reta") {
      totalTestSkill1 = diceResult1 + player1.velocidade;
      totalTestSkill2 = diceResult2 + player2.velocidade;

      await logRollResult(
        player1.nome,
        "velocidade",
        diceResult1,
        player1.velocidade
      );
      await logRollResult(
        player2.nome,
        "velocidade",
        diceResult1,
        player2.velocidade
      );
    }

    if (block === "Curva") {
      totalTestSkill1 = diceResult1 + player1.manobrabilidade;
      totalTestSkill2 = diceResult2 + player2.manobrabilidade;

      await logRollResult(
        player1.nome,
        "manobrabilidade",
        diceResult1,
        player1.manobrabilidade
      );
      await logRollResult(
        player2.nome,
        "manobrabilidade",
        diceResult1,
        player2.manobrabilidade
      );
    }

    if (block === "Confronto") {
      let totalPowerResult1 = diceResult1 + player1.poder;
      let totalPowerResult2 = diceResult2 + player2.poder;

      console.log(`${player1.nome} disputou com o ${player2.nome} ⚔`);

      await logRollResult(player1.nome, "poder", diceResult1, player1.poder);
      await logRollResult(player2.nome, "poder", diceResult1, player2.poder);

      if (totalPowerResult1 > totalPowerResult2 && player2.poder > 0) {
        console.log(
          `${player1.nome} venceu o confronto! O ${player2.nome} perdeu um ponto 🐢🐢`
        );
        player2.pontos--;
      }

      if (totalPowerResult2 > totalPowerResult1 && player1.poder > 0) {
        console.log(
          `${player2.nome} venceu o confronto! O ${player1.nome} perdeu um ponto 🐢🐢`
        );
        player1.pontos--;
      }

      console.log(
        totalPowerResult1 == totalPowerResult2
          ? "Confronto empatado, nenhum ponto foi perdido!"
          : ""
      );
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${player1.nome} marcou um ponto!`);
      player1.pontos++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${player2.nome} marcou um ponto!`);
      player2.pontos++;
    }

    console.log("------------------");
  }
}

async function logRollResult(name, typeBlock, diceResult, attribute) {
  console.log(
    `${name} 🎲 Rolou um dado de ${typeBlock} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function declareWinner(player1, player2) {
  console.log(`Resultado final:`);
  console.log(`${player1.nome}: ${player1.pontos} pontos`);
  console.log(`${player2.nome}: ${player2.pontos} pontos`);

  if (player1.pontos > player2.pontos) {
    console.log(`\n ${player1.nome} venceu a corrida! 🏆`);
  } else if (player2.pontos > player1.pontos) {
    console.log(`\n ${player2.nome} venceu a corrida! 🏆`);
  } else {
    console.log("A corrida terminou em empate!");
  }
}
