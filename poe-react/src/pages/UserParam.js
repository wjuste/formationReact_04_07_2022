import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserParam = () => {

    const api_url = 'http://localhost:4000/users/';
    const[user, setUser] = useState({});
    //const params = useParams(); //Récupère un objet avec les paramètres
    //const id = params.id;
    const{id} = useParams(); //Version raccourcis avec la decomposition

    const getUser = async () => {
        const {data} = await axios.get(api_url + id); //http://localhost:4000/user/{id}
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, [])

    return(
        <>
            {
                (user) ? 
                    <div>
                        <h1>Profile de {user.name}</h1>
                        <p>Email : {user.email}</p>
                    </div>
                    :
                    <p>Nope, rien à voir ici !</p>
            }
        </>
    )
}

export default UserParam;