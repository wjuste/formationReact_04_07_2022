/*
    Requêtes HTTP (du point de vue Front)
    https://monapi.com/produit/1
    https://monapi.com/produit?category=bidule
    GET ==> Donnée dans l'URL, pour récuperer une donnée 

    POST => Créer des données dans le back (ou persister)
    PATCH => Modifier partiellement des données 
    PUT  => Remplacer des données 

    DELETE => Supprimer des données
    
*/

const url = "https://jsonplaceholder.typicode.com/";
const user_url = url + "users";
let users = [];

function displayUsers() {
    users.forEach( u => {
        const li = document.createElement("li");
        li.textContent = u.name;
        document.querySelector('#ul').appendChild(li);
    })
}

/*
    La méthode fetch permet de faire des appels AJAX en Javascript 
    La méthode retourne une promesse 
    Les promesses représentent le résultat d'une fonction asynchrone
    Il est possible d'executer du code après le resultat d'une promesse grâce 
    à la méthode "then" 
    Cette méthode accepte en paramètre une fonction. 
    Vous pouvez donc transmettre à cette fonction la reponse 
    de votre API 

    .then((res)  => res.json())
    La reponse qu'on obtient n'est pas du JSON, on doit utiliser la méthode json().
    Le paramètre res  prend la valeur de l'objet renvoyé par fetch(user_url)
    On utilise la méthode json() pour convertir res en données  JSON

*/
fetch(user_url) 
    .then ( (res) => res.json())
    .then(res_users => {
        users = res_users;
        console.log(users);
        displayUsers();
    })


    /*
        On peut également utiliser les instructions "async" et "await"  pour gerer 
        nos promesses. 
        utiliser l'instruction "async" pour déclarer votre fonction asynchrone
        A l'interieur du code de la foncton, l'instruction "await" va permettre 
        d'attendre le resultat de l'appel pour ensuite récuperer le resultat
    */
   //Async Await 
   async function getUsers() {
    try {
        const response = await fetch(user_url);
        users = await response.json();
        console.log(users);
        displayUsers();
    } catch(err) {
        alert(err);
    } finally {
        //si besoin
    }
   }

   //getUsers();


   //Axios : Librairie pour faire des requêtes HTTP
   const post_url = url + "posts";
   function getPosts1() {
    //Création d'une promesse qui va contenir l'appel
    axios.get(post_url)
    //Avec le then on extrait les données
    .then(res => console.log(res.data));
   }

   //Utiliser async, await
   async function getPosts2() {
    const res = await axios.get(post_url);
    const posts = res.data;
    console.log(posts);
   }

   getPosts1();
   getPosts2();


const new_todo = {
    userId: 2,
    title : "Comprendre Ajax",
    completed: false
}
const todo_url = url + 'todos';
function createTodo1() {
    axios.post(todo_url, new_todo)
    .then(res => console.log(res))
    .catch(err => console.warn(err));
}

//async await 
async function createTodo2() {
    try {
        const res = await axios.post(todo_url, new_todo);
        console.log(res);
    } catch(err) {
        console.warn(err);
    }
}

//createTodo1();
createTodo2();