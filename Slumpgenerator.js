//Input från användaren
const min = parseInt(prompt("Välj ett min värde: "));
const max = parseInt(prompt("Välj ett max värde: "));

// Genererar ett slumpmässigt värde
const a = Math.floor(Math.random() * (max - min + 1)) + min;

//Visar slumpmässigt värde
console.log(`Slumpmässigt värde mellan ${min} och ${max} är ${a}`);
