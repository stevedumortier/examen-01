function beoordeelTemperatuur(graden) {
  if (graden == NaN) {
    return "ongeldige invoer";
  } else if (graden <= 60) {
    return "te koud";
  } else if (graden <= 70) {
    return "perfect";
  } else if (graden > 70) {
    return "te heet";
  } else {
    return "ongeldige invoer";
  }
}

console.log(beoordeelTemperatuur(55));
console.log(beoordeelTemperatuur(64));
console.log(beoordeelTemperatuur(70));
console.log(beoordeelTemperatuur(82));
console.log(beoordeelTemperatuur("warm"));
