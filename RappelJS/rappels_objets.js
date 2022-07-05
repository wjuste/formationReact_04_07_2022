/*
    L'objet stock des variables (Propriétés) et des fonctions 
    ex acceler et freiner sont des méthodes 
    Une classe est le moule qui permet de fabriquer les objets
*/

class User {
    #firstname;
    lastname;
    username;
    email;
    age;
    role = "USER";

    constructor(firstname, lastname, email) {
        this.#firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = `${firstname} ${lastname}`;
    }

    sayHello() {
        console.log(this.username + " dit bonjour");
    }

    //Dans une classe, on fait attention au contexte dans une fonction anonyme
    sayHello2 = function() {
        console.log(this.username + " dit bonjour 2");
    }

    sayHello3 = () => console.log(this.username + " dit bonjour 3");

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }
}

const u = new User('Jean Michel', 'LaTourte', 'jm@mail.fr');
console.log(u.username, u.role, u.age);

u.sayHello();
u.sayHello2();
u.sayHello3();

class Employee extends User {
    job;
    constructor(firstname, lastname, email, job) {
        super(firstname, lastname, email);
        this.job = job;
    }
}

const e = new Employee('Jane', 'Doe', 'jdoe@mail.fr', 'Développeuse');
e.sayHello();

const isEmpployee = e instanceof Employee; //true
const isUser = e instanceof User;    //true 
const isObject = e instanceof Object; // true 
const isString = e instanceof String;  //false

console.log(typeof e);  

/*
    En JS , il n'y a pas d'interface, ni d'enum, par contre en typescript, si 
    Il n'y a pas d'abstraction, il n'y a pas de surcharge de méthode ni de constructor
*/


/*
    Objets littéraux 
    Pour créer un objet litteral, on utilise la syntaxe utilisant 
    une paire d'accolades { ...} qui indique en Javascript que nous créons un objet
*/
const book = {
    title: `Frankenstein`, 
    author: {
        firstname: `Mary`,
        lastame: `Shelley`,
        nationality: `English`,
        fullname: function() {
           return `${this.firstname} ${this.lastame}`  
        },
        fullname2: () => `${this.firstname} ${this.lastame}`, 
        fullname3() {
            return `${this.firstname} ${this.lastame}`
        }
    }, 
    year : 1880, 
    is_read : true, 
    award : ['Prix Goncourts', 'Prix Bidule', 'Super prix']
};

console.log(book.title);
console.log(book.author.lastame);

console.log(book.author.fullname2(book));  //Undefined Undefined
/*  
    Dans un objet littéral, les méthodes écrites en fléchée ne reconnaissent pas 
    l'objet comme contexte (this). 
    Le  mot clef this fait toujours référence au contexte le plus haut (Window)
    Il vaut mieux utiliser une syntaxe de fonction classique ou anonyme
*/

/*
    On peut utiliser le point pour acceder aux membres d'un objet, les modifier
    ou en définir de nouveaux
*/
book.id = 1;

/*
    On peut utiliser les crochets pour accéder aux propriétés d'un objet, les modifier
    ou en définir des nouvelles  
*/
const new_prop = 'edition';  //On defini une nouvelle propriété nommée 'Edition'
book[new_prop] = 'Editions Pingouins';  //Sa valeur est "Editions Pingouins"
console.log(book.edition); //Valeur : Editions Pingouins
console.log(book[new_prop]);  //Idem

/*
    L'operation delete permet de retirer une propriété d'un objet
*/
delete book.id;  //Supprime la propriété 'id' 
console.log(book);

for(let prop in book) {
    console.log(prop);   //On récupère la propriété, non la valeur 
}


/*
 *Traditionnellement si on voulait créer une nouvelle variable pour chaque propriété, 
 * on devrait affecter chaque variable individuellement, avec de beaucoup de répétition
 */
// const title = book.title;
// const published_year = book.year;
// console.log(published_year);

//Affectation par décomposition / destructuring
const{title, year : published_year, lang = 'en', ...rest} = book;
console.log(title, published_year);

/*
    La destructuration d'un obet ne modifie pas l'objet l'original
*/
console.log(rest);

//Fonctionne aussi pour les tableaux 
const fruits = ['Peche', 'Pomme', 'Poire', 'Abricot'];
const[a, b, ...c] = fruits;
/*
    const a = fruits[0];
    const b = fruits[1]
    c : [Poire, Abricot]
*/
console.log(a);
console.log(c);