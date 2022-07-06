import { useState } from "react";

const State = () => {

    let counter1 = 0;
    const boom = () => alert("BOOM !");
    const event = (event) => console.log(event);
    const param = (p) => console.log(p);
    const incrementCount =  () => {
        counter1++;
        console.log(counter1);
    }

    /*
        Un useState renvoie une pair de valeur : 
            - L'état actuel (count)
            - Et une fonction pour le modifier (setCount) 
        que nous initialisons à zéro
    */
   //Déclare une variable d'état count
    const[count, setCount] = useState(0);
    
    //Déclare une variable d'état message
    const[message, setMessage] = useState("Hello World");

    const increment = (e) => {
        const new_value = count + 1;
        //On met à jour count avec la méthode setCount
        setCount(new_value);
    }

    const handleSubmit = (e) => {
        //Pour eviter que la page se recharge à cause du submit
        e.preventDefault();
        console.log(e);
        const form = e.target; // tableau
        const input = form[0];  //element HTML input
        console.log(input);
        const new_messsage = input.value;
        setMessage(new_messsage); //fonction issue de useState
        input.value="";
    }

    return (
        <>
            <h1>Les Hooks</h1>
            <main>
                <article>
                    <h2>Problème</h2>
                    <h3>Evénement de click</h3>
                    <div>
                        <button onClick={boom}>Ne cliquez pas ici !</button>
                        <button onClick={event}>Event</button>
                        <button onClick={() => console.log("Hello")}>Hello</button>
                        <button onClick={e => console.log(e)}>Event 2</button>
                        <button onClick={() => param("Coucou")}>Paramètre</button>
                    </div>
                    <h3>Compteur: </h3>
                    <p>Mon compteur : {counter1}</p>
                    <div>
                        <button onClick={incrementCount}>+</button>
                    </div>
                    <p>La modification se fait bien avec counter, mais elle n'est pas répercutée sur le DOM.</p>
                    <p>Pour que React modifie le DOM dynamiquement, il faut lui demander d'écouter l'état des variables</p>
                </article>
                <article>
                    <h2>Le hook d'état  : useState</h2>
                    <p>Les hooks existent depuis React 16.8, avant, on utilisait les states.</p>
                    <p>
                        useState est une méthode qui retoure un tableau de 2 valeurs : 
                        l'état actuel qui est la valeur actuel, et une fonction pour modifier cet état.
                    </p>
                    <p>Mon deuxième compteur : <b>{count}</b></p>
                    <div>
                        <button onClick={increment}>Increment count</button>
                    </div>

                    <p>Mon message : </p>
                    <p>{message}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="msg">New Message : </label>
                        <input id="msg" name="msg" />
                        <button type='submit'> Save</button>
                    </form>
                </article>
            </main>
        </>

    )

}

export default State;