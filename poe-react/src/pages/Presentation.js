const Presentation = () => {
    const message = "Je suis une variable ! ";
    const borderColor = "darkslategrey";
    const my_style = {color: "teal", borderStyle: "solid", borderColor};

    const logo = "https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png";

    const image = {
        url : "https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png",
        alt : "Logo de React",
        height : 40
    }

    //Ici : le JSX à retourner 
    return (
        <div>
            <h1>Présentation</h1>
            <main>
                <article>
                    <h2>Les JSX</h2>

                    <p>Un composant : c'est un block de code réutilisable</p>
                    <p>Il est conseillé en React d'utiliser la syntaxe JSX</p>
                    <p>Les JSX ne sont ni une chaine de caractère, ni du HTML</p>
                    <p>React va se servir de cette architecture pour recréer le DOM</p>
                    <p>Les JSX permettent d'interpoler du code JS à l'nterieur des balises.</p>
                    <p>Pour ça, on utilise les accolades.</p>
                </article>
            </main>
        </div>
    );

}

export default Presentation;