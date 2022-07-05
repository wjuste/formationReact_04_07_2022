const Static = () => {
    let message = "Les JSX servent à interpréter du Javascript " +
    "entre {}, on peut donc y manipuler des données." ;
    
    const fruits = ['Pomme', 'Poire', 'Banane', 'Ananas'];
    const fruits_bis = [
        {id: 1, name: 'Pomme', price:2.9},  
        {id:2, name:'Mangue', price: 2}, 
        {id:3, name:'Clémentines', price: 3.1}
    ];
    const isLogged = true;
    const name = "Jane Doe";

    const conditionalDisplay = () => {
        if(isLogged) {
            return <p>Connecté.e (ce message est affiché par une fonction)</p>
        } else {
            return <p>Pas Connecté.e (ce message est affiché par une fonction)</p>
        }
    }

     //Ici : le JSX à retourner 
    return (
        <>
            <h1>Données Statiques</h1>
            <main>
                <div className="card">{message}</div>

                <article>
                    <h2>Les listes</h2>
                    <ul>
                        {/* prop key :  *doit contenir une valeur unique
                        (comme la propriété id) */}
                        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
                        {/* 
                            fruits.map(function(fruit) {
                                return (<li>{fruit}</li>)
                            })
                         */}
                    </ul>

                    <div className="grid">
                        {
                            fruits_bis.map(f => (
                                <div className="card" key={f.id}>
                                    {f.name}, {f.price} €
                                </div>
                            ))
                        }
                    </div>
                </article>
            </main>
        </>
    )

}

export default Static;