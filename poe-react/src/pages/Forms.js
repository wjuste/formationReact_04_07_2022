import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ShowForm from "../components/ShowForm";

const Forms = () => {
    const[users, setUsers] = useState([]);
    const api_url = 'http://localhost:4000/users';

    const getUsers = () => {
        axios.get(api_url)
        .then(res => setUsers(res.data))
    }

    const createUser = (user) => {
        axios.post(api_url, user)   //On persiste notre user
        .then( () => getUsers())   //On relance la requête pur afficher notre nouveau user  
        .catch(err => {
            console.error(err);
            alert('Nope !');
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const handleSubmit = (e) =>  {
        //Pour eviter que la page se recharge à cause du submit
        e.preventDefault();
        console.log(e);
        const form = e.target;  //un tableau avec les inputs 
        const name = form[0].value;   //valeur du 1er input du form (dans l'ordre du HTML)
        const email = form[1].value;
        const user = {name, email}; //equivalent à {name:name, email:email}
        createUser(user);
        form[0].value = '';
        form[1].value = '';

    }

    return (
        <>
            <h1>Formulaires</h1>
            <main>
                <h2>Users</h2>
                <div className="grid">
                {
                    users.map(u => 
                        <div key={u.id} className="card">
                            <h3>{u.name}</h3>
                            <p>
                                <NavLink to={'/user/' + u.id}>Profil</NavLink>
                            </p>
                        </div>
                        )
                }
                </div>

                <h2>Form : </h2>
                <fieldset>
                    <legend>Nouvel.le utilisateur.trice</legend>
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="name">Nom</label>
                            <input id="name"/>
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input id="email"/>
                        </p>
                        <p>
                            <button type="submit">Créer</button>
                        </p>
                    </form>
                </fieldset>
                <ShowForm create={createUser} />
            </main>
        </>
    )

}

export default Forms;