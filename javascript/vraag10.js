const product = ["espresso", "latte", "cappuccino", "croissant"];
const prijs = [2.4, 3.6, 3.3, 2.1];
let korting = 0;
function prijsVan(product) {
  for (let i = 0; i < product.length; i++) {
    switch (product[i]) {
      case "espresso":
        return prijs[i];
      case "latte":
        return prijs[i];
      case "cappuccino":
        return prijs[i];
      case "croissant":
        return prijs[i];
      default:
        return `Onbekend product ${product[i]}`;
    }
  }
}

function bepaalKorting(klanttype) {
  switch (klanttype) {
    case "student":
      return 0.2;
    case "personeel":
      return 0.25;
    default:
      return 0;
  }
}

function maakKassaticket(producten, aantallen, klanttype = "gewoon") {
  if (producten.length !== aantallen.length) {
    throw new Error(`Producten en aantallen passen niet bij elkaar`);
  }
  for (let i = 0; i < producten.length; i++) {
    if (aantallen[i] == 0) {
    } else {
      console.log(
        `${aantallen[i]} x ${producten[i]} = € ${(prijsVan(producten[i]) * aantallen[i]).toFixed(2)}`,
      );
    }
    if (aantallen.reduce((totaal, aantal) => totaal + aantal, 0) >= 5) {
      //als er in totaal 5 of meer producten zijn

      for (let y = 0; y < aantallen.length; y++) {
        //voor elke index in aantallen
        if (aantallen[y] > 0) {
          //als het aantal groter is dan 0
          //kijken als de prijs van elk product goedkoper is dan de vorige OF array maken met alle producten waarvan hun aantal groter is dan 1
          //later terugkomen
        }
      }
      // console.log(`Goedkoopste product gratis: - € ${}`)
    }

    let subTotaal = 0;
    let korting = 0;
    for (let x = 0; x < aantallen.length; x++) {
      if (aantallen[x] > 0) {
        subTotaal += aantallen[x] * prijsVan(producten[x]);
      }
    }
    if (subTotaal > 10) {
      if (bepaalKorting(klanttype) > 0) {
        console.log(
          `Korting (${klanttype}): - ${subTotaal * bepaalKorting(klanttype)}`,
        );
        korting = subTotaal * bepaalKorting(klanttype);
      }
    }

    console.log(`Te betalen: € ${subTotaal - korting}`);
  }
}

try {
  const ticket1 = maakKassaticket(
    ["latte", "croissant", "espresso", "cappuccino"],
    [2, 3, 0, 1],
    "student",
  );
  console.log(ticket1.join("\n"));
  console.log("----------");
  const ticket2 = maakKassaticket(["espresso", "latte"], [1, 1]);
  console.log(ticket2.join("\n"));
  console.log("----------");
  const ticket3 = maakKassaticket(["latte", "thee"], [1, 2], "personeel");
  console.log(ticket3.join("\n"));
} catch (fout) {
  console.error(fout.message);
}
