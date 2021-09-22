import './styles/styles.css';
import logob from './media/logob.jpg'
import v50 from './media/v1950.jpg'
import v61 from './media/v1961.jpg'
import v20 from './media/v2020.jpg'

function App() {
  return (
    <div className="App">         
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
                    <CardCarros nombreModelo='Modelo 1950' imagen={v50} like='50' comentario='200' vista='500'/>
                    <CardCarros nombreModelo='Modelo 1960' imagen={v61} like='100' comentario='120' vista='800'/>
                    <CardCarros nombreModelo='Modelo 2020' imagen={v20} like='320' comentario='400' vista='600'/>
                </ul>
            </section>
            <section></section>
        </main>
        <footer></footer>       
    </div>
  );
}

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

export default App;
