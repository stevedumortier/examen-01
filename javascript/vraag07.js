const prijzen = [2.5, 4.8, 3.2, 5.5, 3.9, 2.9];
const onder4 = prijzen.filter((a) => a < 4);
// console.log(onder4);
const prijzenInclBtw = onder4.map((a) => (a * 1.12).toFixed(2));
// console.log(prijzenInclBtw);
console.log(`€ ${prijzenInclBtw.join(" | € ")}`);

for (i = 0; i < prijzenInclBtw.length; i++) {
  prijzenInclBtw[i] = Number(prijzenInclBtw[i]);
}
const som = prijzenInclBtw.reduce((totaal, prijs) => totaal + prijs, 0);
console.log(`Som: € ${som.toFixed(2)}`);
