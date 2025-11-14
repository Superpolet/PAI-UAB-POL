/* //21.1.- Fes un programa que faci el següent: ● Defineix una variable de tipus taula, buida. ● Afegeixi el valor “Hola” a la posició 0. ● Afegeixi el valor “Adeu” a la posició 1. ● Escrigui a la consola el contingut de la taula.

// let taula = []; Definim una variable de tipus taula, buida

// taula[0] = "Hola"; // Afegeix el valor "Hola" a la posició 0
// taula[1] = "Adeu"; // Afegeix el valor "Adeu" a la posició 1   
// console.log(taula); Escriu a la consola el contingut de la taula

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent ● Afegeixi el valor “Nom” a la posició 2 de la taula. ● Escrigui a la consola el contingut de la taula. ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “ ● Escrigui a la consola el contingut de la taula. */

/* let taula = []; // Definim una variable de tipus taula, buida

taula[0] = "Hola"; // Afegeix el valor "Hola" a la posició 0
taula[1] = "Adeu"; // Afegeix el valor "Adeu" a la posició 1   
taula[2] = "Nom"; // Afegeix el valor "Nom" a la posició 2 de la taula 
console.log(taula); // Escriu a la consola el contingut de la taula */

/* // 21.3.- Fes un programa que faci el següent:
● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
● Guardi a la posició 6 de la taula la suma dels elements
● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

 */

/* let taula = [23, 45, 98, 73];
let suma = taula[0] + taula[2]; 
console.log("La suma dels elements a les posicions 0 i 2 és: " + suma);  */

/* 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
taula a la consola. */

/* let numero = parseFloat(prompt("Introdueix un número:")); // 
let taula = []; 
taula[0] = numero * 2; 
taula[1] = numero * 3;  */

/* 21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
multiplicació i la divisió dels dos valors introduïts. */

/* let numero1 = parseFloat(prompt("Introdueix el primer número:"));
let numero2 = parseFloat(prompt("Introdueix el segon número:"));
let taula = [];
taula[0] = numero1 + numero2;
taula[1] = numero1 - numero2;
taula[2] = numero1 * numero2;
taula[3] = numero1 / numero2;       
console.log("Resultats de les operacions:");
console.log("Suma: " + taula[0]);
console.log("Resta: " + taula[1]);
console.log("Multiplicació: " + taula[2]);
console.log("Divisió: " + taula[3]); */

/* 21.6.- Donada aquesta taula:
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
de la taula.
*****
Donada la definició d’aquesta taula:
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; */

/* let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
console.log("Primer valor de la taula: " + taula[0]); 
console.log("Últim valor de la taula: " + taula[taula.length - 1]);  */

/* 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la
taula, un a un. */

/* for (let i = 0; i < taula.length; i++) {
    console.log("Valor a la posició " + i + ": " + taula[i]);
}    */
 
/* 21.8.- Fes un programa que escrigui a la consola la suma tots els valors
emmagatzemats a la taula. */

/* let sumaTotal = 0;
for (let i = 0; i < taula.length; i++) {
    sumaTotal += taula[i]; 
}

21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els
valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula
emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola. */

/* let Taula25 = [];
for (let i = 0; i < taula.length; i++) {
    Taula25[i] = taula[i] + 25; 
}   
 */

/* 21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula
i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel
nombre de valors). */

/* let sumaTaula = 0;
for (let i = 0; i < taula.length; i++) {
    sumaTaula += taula[i]; 
}        */

/* 21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més
petit de la taula.  */
/* let valorMaxim = taula[0];
let valorMinim = taula[0];
for (let i = 1; i < taula.length; i++) {
    if (taula[i] > valorMaxim) {
        valorMaxim = taula[i]; 
    }
    if (taula[i] < valorMinim) {
        valorMinim = taula[i];
    }
}
console.log("Valor més gran de la taula: " + valorMaxim);
console.log("Valor més petit de la taula: " + valorMinim); */

/* 21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els
valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.  */

/* let taulaParells = [];
for (let i = 0; i < taula.length; i++) {
    if (taula[i] % 2 === 0) {
        taulaParells.push(taula[i]); 
    }   
}
console.log("Taula amb valors parells: " + taulaParells);  */

/* 21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i
escrigui a la consola quants cops apareix aquest valor a la taula.  */

/* let valor = parseFloat(prompt("Introdueix un valor:"));
let comptador = 0;
for (let i = 0; i < taula.length; i++) {
    if (taula[i] === valor) {
        comptador++;
    }
}
console.log("El valor " + valor + " apareix " + comptador + " vegades.");  */

/* 21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el
mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada
element que es trobi a la mateixa posició als dos arrys.
Exemple: [1,2,3] + [2,3,4] → [3,5,7] */

/* let array1 = [1, 2, 3];
let array2 = [2, 3, 4]; 
if (array1.length === array2.length) {
    let arraySuma = []; 
    for (let i = 0; i < array1.length; i++) {
        arraySuma[i] = array1[i] + array2[i]; 
    }   
    console.log("Array suma: " + arraySuma);
} else {
    console.log("Els arrays no tenen el mateix nombre d'elements.");
} */

/*  */

/* 21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els
valors de la primera però donant-li la volta.
Exemple: [1,2,3,4,5] → [5,4,3,2,1]
******
Donada la definició d’aquesta taula:
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; */

let taulaInversa = [];
for (let i = 0; i < taula.length; i++) {
    taulaInversa[i] = taula[taula.length - 1 - i];
}
console.log("Taula inversa: " + taulaInversa);          