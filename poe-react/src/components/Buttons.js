
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import '../style/Buttons.css';

export const Btn = ({action, txt, loading=false, disable=false}) => {
    return (
        <button disabled={disable} onClick={action}>
            {/* Si isLoading est égale à false on affiche le texte 
                Sinon  on applique la classe bounce */ }
            {(!loading)? txt : <span className="bounce"/>}
        </button>
    )
}

Btn.propTypes = {
    action: PropTypes.func.isRequired, 
    txt: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    disabled : PropTypes.bool
}

export const BackBtn = () => {
    /*
        useNavigate nous permet de naviguer à travers les routes
        Donc d'aller aux pages précédentes ou suivantes 
        Rediriger l'utilisateur vers une URL spécifique. 
    */
    const navigate = useNavigate();
    console.log(navigate);

    //Nous permet de  nous rediriger vers la page précedemment visitée
    const back = () => navigate(-1);

    return <button onClick={back} className="secondary">{'<'} Back</button>

}