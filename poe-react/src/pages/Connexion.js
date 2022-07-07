import { useState } from "react"
import { Btn } from "../components/Buttons";

const Connexion = () => {

    const[isLogged, updateLog] = useState(false);

    function login () {
        /*
            if(isLogged) 
                updateLog(false)
            else 
                updateLog(true)
        */
        updateLog(!isLogged);
    }

    return (
        <>
            <h1>Login</h1>
            <button onClick={login}>
                {(isLogged) ? 'Deconnexion' : 'Connexion'}
            </button>

            <Btn action={login} txt={(isLogged) ? 'Déconnexion' : 'Connexion'} />

            {
                (isLogged)?
                <p>Bienvenue</p> :
                <p>Vous n'est pas connecté.e</p>
            }

        </>
    )
}

export default Connexion;