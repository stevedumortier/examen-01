const namen = ["Brazilië", "Ethiopië", "Colombia", "Kenia", "Peru"];
const voorraden = [12, 3, 9, 0, 15];

function maakBestellijst(namen, voorraden, minimum) {
  const regels = [];
  if (namen.length !== voorraden.length) {
    throw new Error(`De lijsten zijn niet even lang.`);
  }
  for (let i = 0; i < namen.length; i++) {
    if (voorraden[i] >= minimum) {
      continue;
    } else {
      const teKort = minimum - voorraden[i];
      const woord = teKort == 1 ? "zak" : "zakken";
      regels.push(`${namen[i]}: bestel ${teKort} ${woord}.`);
    }
  }
  return regels;
}
try {
  const lijst = maakBestellijst(namen, voorraden, 10);
  for (let i = 0; i < lijst.length; i++) {
    console.log(lijst[i]);
  }
  // toon de regels onder elkaar, of "Niets te bestellen."
  console.log(`Aantal lijnen: ${lijst.length}`);
  const leeg = maakBestellijst(namen, voorraden, 0);
  if (leeg.length == 0) {
    console.log(`Niets te bestellen.`);
  }
  // toon de regels onder elkaar, of "Niets te bestellen."

  maakBestellijst(["Brazilië"], [1, 2], 10);
} catch (fout) {
  console.error(fout.message);
}
