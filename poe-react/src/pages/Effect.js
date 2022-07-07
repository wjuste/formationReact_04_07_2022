/*
    Le Hook d'effet permet l'execution d'effet de bord dans les fonctions composants: 
      - Charger des données depuis un serveur distant 
      - Declencher une alerte à chaque fois que votre panier est mis à jour 
      - Sauvegarder ce panier à chaque mise à jours    
*/

import { useState } from "react";

const Effect = () => {
    const [counter, setCounter] = useState(0);
    const[isLogged, setLog] = useState(false);

    let toto = "toto";

    const increment = () => {
        setCounter(counter + 1)
        toto = "Not toto";
        console.log("in increment : ", toto);
    }

    return (
        <>  
            <h1>Effect</h1>
            <article>
                <h2>Présentation : useEffet</h2>
                <p>Compteur : {counter}</p>
                <p>
                    <button onClick={increment}>++</button>
                    <button onClick={() => setLog(!isLogged)}>
                        {(isLogged)? 'Logout': 'Login'}
                    </button>
                </p>
                <p>useEffect permet d'agir lorsque le DOM est mis à jour / rendu</p>
                <p>Il agit à la création du composant, au 1er rendu, et à chacunes des modifications</p>
                <p>On se sert de useEffect pour : </p>
                <ul>
                    <li>Faire des requêtes à la création du composant</li>
                    <li>Agir à la modification d'une valeur précise</li>
                    <li>Agir à chaque modification</li>
                    <li>Pour couper les connexions à des flux, des websockets, des observables,...</li>
                </ul>
            </article>
        </>
    )
}

export default Effect;