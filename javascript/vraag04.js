const aantal = 12;
const prijs = 3.2;

let totaal = 0;

for (let i = 1; i <= aantal; i++) {
  if (i % 5 == 0) {
    console.log(`Koffie ${i}: gratis!`);
  } else {
    console.log(`Koffie ${i}: € ${prijs.toFixed(2)}`);
    totaal += prijs;
  }
}
console.log(`Totaal te betalen: € ${totaal.toFixed(2)}`);
