import axios from "axios";
import { useEffect, useState } from "react";

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

                            </p>
                        </div>
                        )
                }
                </div>
            </main>
        </>
    )

}

export default Forms;