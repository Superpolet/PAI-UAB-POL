/* Exercici 3.1
 Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció.  */
/* function esParellOImparell() {
    let numero = parseInt(prompt("Introdueix un nombre enter:"));   
    if (isNaN(numero)) {
        return "El valor introduït no és un nombre vàlid.";
    }
    if (numero % 2 === 0) {
        return "El número és parell.";
    } else {
        return "El número és imparell.";
    }           
}
alert(esParellOImparell());    
*/

/* Exercici 3.2
Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és.  */
/* 
function esAnyDeTraspas() {
    let any = parseInt(prompt("Introdueix un any:"));       
    if (isNaN(any)) {
        return "El valor introduït no és un any vàlid.";
    }
    if ((any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0)) {
        return "L'any és de traspàs.";
    }
    else {
        return "L'any no és de traspàs.";
    }
}
alert(esAnyDeTraspas()); */

/* Exercici 3.3
Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N. */

/* function sumaInversaQuadrats() {
    let N = parseInt(prompt("Introdueix un nombre enter N:"));  
    if (isNaN(N) || N <= 0) {
        return "El valor introduït no és un nombre enter positiu vàlid.";
    }       
    let suma = 0;
    for (let n = 1; n <= N; n++) {
        suma += 1 / (n * n);
    }
    return suma;
} */

/* Exercici 3.4
Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades.

El càlcul de la nota final serà diferent depenent de si l’estudiant ha seguit o no l’avaluació continuada, i de la nota d’aquesta:

Si la nota d’avaluació continuada és més gran o igual que 5, la nota final la calcularem com: 

NOTA_FINAL = 0,2 * NOTA_AC + 0,4 * NOTA_PRACT + 0,4 * NOTA_EXAMEN 

Si la nota d’avaluació continuada és menor que 5, la nota final la calcularem com: 

>NOTA_FINAL = 0,4 * NOTA_PRACT + 0,6 * NOTA_EXAMEN 

On NOTA_FINAL és la nota final de l’assignatura que hem de calcular, NOTA_AC és la nota d’avaluació continuada, NOTA_PRACT és la nota de pràctiques, i NOTA_EXAMEN és la nota de l’examen. 

La funció ha de retornar una cadena que contingui el valor numèric de la nota final obtinguda per l’alumne, seguit de la nota però en format lletra, fent servir la següent taula de conversió: 


Si la nota final és menor que 5 tindrà una D. 
Si la nota final és major o igual que 5 i menor que 6,5 tindrà una C.
Si la nota final és major o igual que 6,5 i menor que 8 tindrà una B. 
Si la nota final és major o igual que 8 i menor que 10 tindrà una A.
>I si la nota final és un 10 tindrà una H. 
Important: Totes tres notes seran valors numèrics, i podem suposar que sempre tindrem els tres valors i seran més grans o iguals que 0 */

function calculadoraNotaFinal() {
    let notaContinua = parseFloat(prompt("Introdueix la nota d'avaluació continuada:"));
    let notaPractiques = parseFloat(prompt("Introdueix la nota de pràctiques:"));
    let notaExamen = parseFloat(prompt("Introdueix la nota d'examen:"));
    if (isNaN(notaContinua) || isNaN(notaPractiques) || isNaN(notaExamen) ||
        notaContinua < 0 || notaPractiques < 0 || notaExamen < 0) {
        return "Una o més de les notes introduïdes no són vàlides.";
    }   
    let notaFinal;
    if (notaContinua >= 5) {
        notaFinal = 0.2 * notaContinua + 0.4 * notaPractiques + 0.4 * notaExamen;
    } else {
        notaFinal = 0.4 * notaPractiques + 0.6 * notaExamen;
    }
    let lletra;
    if (notaFinal < 5) {
        lletra = "D";     
    } else if (notaFinal < 6.5) {
        lletra = "C";
    } else if (notaFinal < 8) {
        lletra = "B";
    } else if (notaFinal < 10) {
        lletra = "A";
    } else {
        lletra = "H";
    }       

    return "La nota final és: " + notaFinal.toFixed(2) + " (" + lletra + ")";
}

alert(calculadoraNotaFinal());