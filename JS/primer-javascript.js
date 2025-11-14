         // Demanem un valor a l'usuari (string)
let edatText = prompt("Quina edat tens?");
let edat = parseInt(edatText); // Convertim a número

// Mostrem un missatge a l'usuari
alert("Has introduït: " + edat + " anys");

// Mostrem un missatge a la consola del navegador
console.log("L’usuari ha introduït l’edat: " + edat);

// Escrivim directament a la pàgina HTML
document.getElementById ("resultat").innerHTML = ("<p>La teva edat és: " + edat + "</p>");         