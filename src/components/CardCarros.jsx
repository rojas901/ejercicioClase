import {Link} from 'react-router-dom';

function CardCarros({nombreModelo, imagen, like, comentario, vista}) {
    return (        
        <li className="card">            
            <div className="contenedorImagen">
                <img src={imagen} alt={nombreModelo}/>
            </div>            
            <span className = "cardTitle">{nombreModelo}</span>
            <div>
                <ul className="contenedorIconos">
                    <li>
                        <i className="fas fa-heart colorCorazon"></i>
                        <span>{like}</span>
                    </li>
                    <li>
                        <i className="fas fa-comment"></i>
                        <span>{comentario}</span>
                    </li>
                    <li>
                        <i className="fas fa-eye"></i>
                        <span>{vista}</span>
                    </li>
                </ul>
            </div>                        
        </li>        
    );
}

export default CardCarros;