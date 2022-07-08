import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import '../style/Librairie.css';

const Librairie = () => {

    const api = "http://localhost:4500/shows";
    const [shows, setShows] = useState([]);

    function getShows() {
        axios.get(api).then(({data}) => {
            setShows(data);
        })
    }

    useEffect(() => {
        getShows();
    }, []); //[] : aucune à surveiller, ne s'execute qu'une seule fois, au rendu

    return(
        <>
            <h2>Mes séries</h2>
            {(!shows || shows.length === 0) ? 
                <p>Votre librairie est vide :(</p>
                :
            <div className="grid">
                {shows.map(sh => <Card key={sh.id} title={sh.title} img={sh.image} 
                status={sh.isWatched}
                />)}
            </div>
            }
        </>
    )
}

export default Librairie;