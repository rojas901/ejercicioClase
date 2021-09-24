import CardCarros from "components/CardCarros";
import v50 from 'media/v1950.jpg'
import v61 from 'media/v1961.jpg'
import v20 from 'media/v2020.jpg'
import {Link} from 'react-router-dom'
import Layout from "layout/Layout";

function Index() {
    return(        
        
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
        
    );
}

export default Index;