const randomDamage = _ => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);

  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function(health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`winner health: ${health}.`);
};

const logDeath = (winner, loser) => {
  console.log("winner defeated loser");
};

const isDead = function(health) {
  if (health <= 0) {return true;
}
else {return false;}

};

console.log(isDead(4));
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);

    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);

      logHealth(player2, player2Health);

      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health === attackPlayer(player1Health);

      if (logDeath(player1, player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("QB", "Shane", 100, 100);

