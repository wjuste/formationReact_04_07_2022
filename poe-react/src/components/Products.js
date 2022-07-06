export const Product = (props) => {
    console.log(props);
    return(
        <div className="card">
            <h3>{props.name}</h3>
        </div>
    )
}

/*
    Lorsque le parent transmet un objet en tant props 
    Le composant enfant prend en paramètre un objet qui 
    sont les propriétés de l'objet
*/
export const ProductObj = ({name, price, currency="€"})  => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix(HT): {price}{currency}</p>
            <p>Prix (TTC) : {price * 1.2}{currency}</p>
        </div>
    )
}



