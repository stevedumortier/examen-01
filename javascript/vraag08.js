function eerlijkGemiddelde(scores) {
  if (scores.length < 3) {
    throw new Error(`Er zijn minstens 3 scores nodig.`);
  }
  const sortedScores = [...scores].sort((a, b) => a - b);
  sortedScores.splice(0, 1);
  sortedScores.splice(sortedScores.length - 1, 1);
  let totaal = 0;
  for (let i = 0; i < sortedScores.length; i++) {
    totaal += sortedScores[i];
  }
  const gemiddelde = totaal / sortedScores.length;
  return gemiddelde;
}

const juryscores = [7, 9, 2, 8, 10, 8];

try {
  console.log(
    `Eerlijk gemiddelde: ${eerlijkGemiddelde(juryscores).toFixed(1)}`,
  );
  console.log(`Originele scores: ${juryscores.join(", ")}`);
  console.log(eerlijkGemiddelde([6, 9]));
} catch (fout) {
  console.error(fout.message);
}
