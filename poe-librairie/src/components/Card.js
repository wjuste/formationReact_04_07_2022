
import '../style/Card.css';

const Card = ({title, img, status}) => {
    return (
        <div className="card">
        <div className="card-header">
            <img src={img} alt={title}/>
        </div>
        <div className="card-body">
            <h3 style={{color: (status) ? 'green' : 'red'}}>{title}</h3>
        </div>
    </div>
    )   
}

export default Card;