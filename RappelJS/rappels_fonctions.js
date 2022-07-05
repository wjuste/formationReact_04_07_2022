/**
 * La variable qui stock une valeur 
 * La fonction qui stock un ensemble d'instruction, permets 
 * de factoriser du code
 */

//function maFonction() {//....}
function sum(a, b = 10, c = 20) {
    //Utilisation des Litteraux de gabarit 
    console.log(`Somme de ${a} + ${b} = ${a + b}`);
    return a + b;
}

let result = sum(20, 10);
console.log(result);
sum(30);

//Cette fonction prend entre 0 et n paramètres 
function sum2(...numbs) {
    //numbs est un tableau 
}

sum2(2, 3, 4, 90, 100);

logMessage1("Coucou avant Fonction")

function logMessage1(a) {
    console.log(a);
}

//logMessage2("Coucou avant fonction anonyme");

//Fonction anonyme
//La fonction existe qu'à partir de sa déclaration
//L'avantage : On peut utiliser les fonctions anonymes lors de la création 
//d'un objet, ou une fonction qui prend en paramètre une autre fonction
 const logMessage2 = function (a) {
    console.log(a);
}

logMessage2("Coucou");
logMessage2("Coucou aussi");

//Déclaration de la fonction doStuffNTime
function doStuffNTime(n, doStuff) {
    for(let i = 0; i < n; i++) {
        //La fonction doStuff est executée dans la boucle n fois
        doStuff(i);
    }
}

//Appelle de la fonction doStuffNTime
doStuffNTime(10, function(i) {
    console.log("Coucou ", i);
});


//Fonction fléché 
const sum3 = (a, b) => a + b;
/*
    (a, b) => a + b;
    equivalent à 
    (a, b) => {
        return a + b;
    }
*/

console.log(sum3(10, 10));  //20

const sum4 = (a, b) => {
    //faire des trucs 
    //Si besoin d'un retour; on met le mot clé return
    return a + b;
}

//Context et utilisation 
setInterval(() => {
    console.log("In interval")
}, 2000);

//setInterval(function, milliseconds)
//Prend en paramètre la fonction et un temps en milliseconds 
//function : La fonction à executer toutes les milliseconds 
//milliseconds : l'intervalle d'éxecution
