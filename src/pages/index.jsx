import CardCarros from "components/CardCarros";
import logob from 'media/logob.jpg'
import v50 from 'media/v1950.jpg'
import v61 from 'media/v1961.jpg'
import v20 from 'media/v2020.jpg'
import {Link} from 'react-router-dom'

function Index() {
    return(        
        <div>
            <header>                    
                <ul className="navbar">
                    <li>
                        <img src={logob} alt="logo v" className="logo"/>
                    </li>            
                    <li>
                        <button className="button mainButton">Nuevo post</button>
                    </li>
                    <li>
                        <div className="buscar">
                            <input placeholder="Buscar un carro"/>
                            <i className="fas fa-search button iconoBusqueda"></i>
                        </div>
                    </li>
                    <li>
                        <button className="button secondaryButton">Login</button>
                    </li>
                    <li>
                        <button className="button mainButton">Registro</button>
                    </li>
                </ul>
            </header>
            <main>
                <section>
                    <h1>Modelos de escarabajo</h1>
                    <ul className="contenedorCard">
                        <Link to='/modelo50' className="Link">
                            <CardCarros nombreModelo='Modelo 1950' imagen={v50} like='60' comentario='200' vista='500'/>
                        </Link>
                        <Link to='/modelo60' className="Link">
                            <CardCarros nombreModelo='Modelo 1960' imagen={v61} like='100' comentario='120' vista='800'/>
                        </Link>
                        <Link to='/modelo2020' className="Link">
                            <CardCarros nombreModelo='Modelo 1960' imagen={v20} like='300' comentario='170' vista='510'/>
                        </Link>
                    </ul>
                </section>
                <section></section>
            </main>
            <footer></footer>
        </div> 
    );
}

export default Index;