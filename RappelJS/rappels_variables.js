/*
    Les types : 
    - Number 
    - String 
    - Booleans 
    - null, undefined 
    - objet : objets natifs : dates, math, string, array... 
    - Array 
    -fonction 
*/

//mot-clé nomDeLaVariable = valeur;
let a = 23; 
const b ="Coucou";
a = "Toto";
a = true;
a = b.length > 5;

/*
    L'égalité stricte (===)  compare les valeurs  + le type 
    == compare que les valeurs 
*/
// > < >= <= === !==
//&&  || 

/*
    falsy : false, undefinded, null, tableau vide [], objet vide, 0, 0.0 
    truthy : la valeur n'est ni null, ni undefined, ni vide, ...quand elle n'est pas falsy
*/

let c;
console.log(c); //UNDEFINED  
/*
    UNDEFINED : Une variable pour laquelle aucune valeur n'a été assignée sera 
                de type undefinded 
*/

if(c) { //c !== undefined || c !== null || c! == ""  ...
    console.log("truthy");
} else {
    //C'est falsy
    console.log("falsy");
}

if(!c) {
    //On fait quelque chose si c'est falsy
    console.log("falsy");
}

let bool = c;  
console.log(bool);  //même valeur que c 
bool = !c; 
console.log(bool); //Si c'est truthy : bool = true

bool = !!c;
console.log(bool);  //false 

//Expression ternaire 
let message = (c) ? 'C est défini' : 'C est undefinded';
console.log(message);

//+ : concaténation 
message = "Coucou " + b;
message+= " !!";
console.log(message);

//addidtion (sur des numbers)
let num = 20 + 10;  //num = 30
num += 5; //num = num + 5; 

let x = 2; 
let y = "1";
let z = 3;
console.log(typeof x);  //type number 
console.log(typeof y ); //type string 
let result  = x + y; //21
console.log("x + y = ", result);
result = z + x + y;  // 2 + 3 = 5, concaténer 5 et 1 ==>  51
console.log(result); //51
result += 2; 
console.log(result); // 512


//Caster en number 
result = x + Number(y);  //Avec Number(y)
console.log(result);
let numb_y = +y; //Avec +y
result = z + numb_y;
console.log(result);

y = "toto";
numb_y = Number(y); //numb_y = NaN (Not a Number)
console.log(numb_y);

//isNaN(n) : returne true si le nombre est NaN
result = (isNaN(numb_y)) ? 0 : x + numb_y;
console.log(result);

//Ne teste que la première
if(23 < 10 && 0 === 0) {
    //Do Something
}

if(20 > 10 || 10 === 10) {

}

c &&= "toto";
//Est ce que c'est true (truthy) ? 
//Si oui, on affecte la valeur toto
//equivalent : 
if(c) {
    c = "Toto";
}

c ||="Toto";
//Si c'est falsy, alors on affecte la valeur "Toto"
//equivalent 
if(!c) {
    c = "Toto";
}

c ??= "Toto"; 
//Si c'est undefined, alors on affecte la valeur "Toto"


//Pa la suite Rappel Fonction / Objets JS 
//Rappel Array (syntaxe)
//Leger rappel DOM