const origines = ["Brazilië", "Ethiopië", "Colombia"];

origines.push("Kenia"); // 1.
origines.reverse(); //2.
origines.push("Peru"); //2.
origines.reverse(); //2.
origines.splice(2, 1); //3.

console.log(origines.join(", ")); //4.

console.log(`Aantal origines: ${origines.length}`); //5.

if (origines.includes("Ethiopië")) {
  console.log("Ethiopië staat in de lijst");
} else {
  console.log("Ethiopië staat niet in de lijst");
}

for (let i = 0; i < origines.length; i++) {
  if (origines[i] == "Colombia") {
    console.log(`Colombia staat op index ${i}`);
  }
}
