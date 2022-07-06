import { Product } from "../components/Products";

const Props = () => {
    /*
        Props : Ce sont des propriétés. Les propriétés ce sont les attributs qui vont être transmis 
                au composant au moment de l'instanciation. 
                Quand on appelle un composant on pourra lui transmettre des propriétés. 
                Ces propriétés peuvent récupérées au moment du Rendu

                Les composants sont comme des fonctions JavaScript. 
                Ils acceptent des entrées quelconques (appelées "props")
                et renvoient des éléments Réact décrivant ce qui doit apparaitre à l'ecran

                Par exemple on va créer une fonction Product(composant react) qui va prendre 
                un seul argument "props" contenant les données, et renvoie un element React.
    */
   const prod = 'Ecran';
   const products = ['Ordinateur', 'Souris', 'Clavier'];
   const obj_products = [
    {id: 1, name: 'Pomme', price: 2}, 
    {id: 2, name: 'Mouchoirs', price: 1}, 
    {id: 3, name: 'T-SHirt', price: 20}
   ]

   return (
    <>
        <h1>Les Props</h1>
        <main>
            <article>
                <h2>Fonctionement</h2>
                <h3>Simple : </h3>
                <div className="grid">
                    {/* Quand on appelle le composant Product on peut lui transmettre des propriétés */}
                    <Product name="Tasse" />
                    <Product name={prod} />
                    <Product />
                </div>
                <h3>Objets</h3>
                
            </article>
        </main>
    </>
   )

}

export default Props;