import PropTypes from 'prop-types';

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


export const ProductTyped = ({name, price, action, currency="€"}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix(HT): {price}{currency}</p>
            <p>Prix (TTC) : {price * 1.2}{currency}</p>
            {action && <button onClick={action}>Clic</button>}
        </div>
    )
}

/*
    Avec la librairie prop-types on va rendre les données obligatoires et typées
    PropTypes : export un ensemble de validateurs qui peuvent être utilisés pour s'assurer 
    que la donnée qu'on recoit est valide
*/
ProductTyped.propTypes = {
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    action: PropTypes.func
}



