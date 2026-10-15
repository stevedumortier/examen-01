function prijsVanMaat(maat) {
  switch (maat) {
    case "small":
      return 2.5;
    case "medium":
      return 3.2;
    case "large":
      return 3.9;

    default:
      null;
  }
}
const maten = ["small", "large", "mega"];

for (const maat of maten) {
  prijsVanMaat(maat) != null
    ? console.log(`${maat}: € ${prijsVanMaat(maat).toFixed(2)}`)
    : console.log(`${maat}: onbekende maat`);
}
