export async function GET() {
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const playerDice1 = rollDice();
  const playerDice2 = rollDice();
  const playerTotal = playerDice1 + playerDice2;

  const dealerDice1 = rollDice();
  const dealerDice2 = rollDice();
  const dealerTotal = dealerDice1 + dealerDice2;

  let winner;
  if (playerTotal > dealerTotal) {
    winner = 'Player';
  } else if (dealerTotal > playerTotal) {
    winner = 'Dealer';
  } else {
    winner = 'Tie';
  }

  const result = {
    playerDice: [playerDice1, playerDice2],
    dealerDice: [dealerDice1, dealerDice2],
    playerTotal,
    dealerTotal,
    winner,
  };

  await fetch('http://localhost:3000/api/patterns', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  }).catch(() => {});

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
}
