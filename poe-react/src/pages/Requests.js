import { useEffect, useState } from "react";
import axios from "axios"

const Requests = () => {
    const joke_api = "https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";
    const[joke, setJoke] = useState("");
    const[character, setCharacter] = useState({});
    const swapi_people = "https://swapi.dev/api/people/";
   
    const[id, setId] = useState(1);

    console.log("Coucou de request"); //s'execute 2 fois

    const getJoke = async() => {
        /*
            axios.get(joke_api)
            .then(res => setJoke(res.data.joke))
        */
       const {data} = await axios.get(joke_api);
       setJoke(data.joke);
    }

    const getCharacter = () => {
        /*
            const {data} = await axios.get(swapi_people + id);
            setCharacter(data);
        */
       axios.get(swapi_people + id)  //https://swapi.dev/api/people/{id}
        .then(res => setCharacter(res.data))
    }

    /*  
        Ce UseEffect permet de recuperer les données de l'API 
        en appelant la méthode getJoke()
    */
    useEffect(() => {
        console.log("Coucou de userEffect");
        getJoke();
    }, []) //[] : aucune valeur à surveiller, ne s'execute qu'une seule fois, au rendu

    /*
        Quand l'id change, la mise à jour se fera (useEffect se lancera)
        Ce useEffect recupère les données de l'API en appelant la fonction 
        getCharacter
        Quand l'id change useEffect se lance et appel la méthode getCharacter()
        qui charge les données venant de l'API
    */
    useEffect(() => {
        getCharacter();
    }, [id])


    return (
        <>
            <h1>Les requêtes</h1>
            <main>
                <h2>Présentation</h2>
                <p>Pour commencer, il faut installer axios dans le projet</p>
                <p><code>npm i axios</code></p>
                <div className="card">{joke}</div>
                <p>
                    Pour récuperer 1 fois des données dans une API, au moment du chargement 
                    du composant, on passe notre requête dans useEffect, et en secode paramètre 
                    de useEffect, on passe un tableau  vide []
                </p>
                <p>
                    Ainsi, on précise à useEffect qu'il n'a aucune valeur à surveiller 
                    il ne s'executera qu'une seule fois, au chargement
                </p>

                <h2>Avec filtre dynamique :</h2>
                <p>
                    <button disabled={id <= 1} onClick={() => setId(id - 1)}>Précedent</button>
                    <button onClick={() => setId(id + 1)}>Suivant</button>
                </p>
                <div className="card">
                    <h3>{character.name}</h3>
                    <p>Naissance : {character.birth_year}</p>
                    <p>Taille : {character.height}cm</p>
                    <p>Poids : {character.mass}kg</p>
                </div>
            </main>
        </>
    )


}

export default Requests;