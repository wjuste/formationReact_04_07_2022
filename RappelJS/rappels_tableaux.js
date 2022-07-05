let fruits = ['Pomme', 'Poire', 'Abricot'];
// let fruits = [];

fruits.push('Mangue');

//Les tableaux commencent à 0
console.log(fruits[0]);
console.log(fruits.length);

fruits.push(42);
const deleted = fruits.pop();  //Supprime le dernier élément
console.log(fruits);


fruits.push("57");
let index = fruits.indexOf(57);
//Supprime 1 élément à l'index donné et retourne une tableau d'éléments supprimées
fruits.splice(index, 1);
console.log(fruits);


//Les callbacks doivent souvent retourner quelque choses 
const res = fruits.filter((fruit) => fruit.charAt(0) === 'M');
console.log(res);


const modified = fruits.map((el) => el.toUpperCase());
console.log(modified);


//Boucler sur un tableau 
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    fruits[i] += 's';
}

console.log(fruits);

for(let f of fruits) {
    console.log(f);
    f = undefined;  //ça modifie pas le tableau de base
}

fruits.forEach((f) => {
    console.log(f);
    f = null;
})

console.log(fruits);
