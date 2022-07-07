import { useState } from "react";
import { Btn } from "../components/Buttons";
import { Product, ProductObj, ProductTyped } from "../components/Products";

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
    {id: 3, name: 'T-Shirt', price: 20}
   ]

   //Declare une variable d'état, que nous appellerons "isLoading"
   const [isLoading, setLoading] = useState(false);

   const testBtn = () => {
        setLoading(true);
        console.log("Coucou");
        setTimeout( () => {
            setLoading(false)
        }, 5000);
   }

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
                <div className="grid">
                    {obj_products.map(p => (
                        <ProductObj key={p.id} name={p.name} price={p.price} />
                    ))}
                    <ProductObj name="café" price="2" currency="$"/>
                    <ProductObj name="Thé"/>
                    <ProductObj name="Beurre de Cacahuète" price="quatre"/>
                    <ProductObj name="Beurre d'amande" prix="5" />
                </div>
            </article>
            <article>
                <h2>Typage</h2>
                <p>Les props, et la souplesse de JS sur les types peuvent poser problème : </p>
                <ul>
                    <li>Propriété non passée</li>
                    <li>Mauvais type</li>
                    <li>Erreur sur le nom d'une prop</li>
                </ul>
                <p>Pour pallier à ça, il existe une librairie: prop-types</p>
                <p><code>npm i prop-types</code></p>
                <p>Attention : </p>
                <ul>
                    <li>Ne fonctionne qu'avec les attributs calculés { 'prop={valeur}' }</li>
                    <li>C'est une librairie de développement, qui ne lance que des warnings</li>
                </ul>

                <h3>Produits typés : </h3>
                <div className="grid">
                    <ProductTyped name={'Machin'} price={300}/>
                    <ProductTyped  name={'Bidule'} price={300} action={() => alert('Coucou')}/>
                </div>
            </article>

            <article>
                <h2>Test Bouton : </h2>
                <div>
                     <Btn action={testBtn} loading={isLoading} txt={'Clic Clic'}/>
                     <Btn action={testBtn} disable={true} txt={'Clic Clic'} />
                </div>
            </article>
        </main>
    </>
   )

}

export default Props;