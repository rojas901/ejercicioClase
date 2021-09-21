import logo from './logo.svg';
import './styles/styles.css';
import logob from './media/logob.jpg'
import v50 from './media/v1950.jpg'
import v61 from './media/v1961.jpg'
import v20 from './media/v2020.jpg'

function App() {
  return (
    <div className="App">
      <header>
          <ul class="navbar">
              <li>
                  <img src={logob} alt="logo v" class="logo"/>
              </li>            
              <li>
                  <button class="button mainButton">Nuevo post</button>
              </li>
              <li>
                  <div class="buscar">
                      <input placeholder="Buscar un carro"/>
                      <i class="fas fa-search button iconoBusqueda"></i>
                  </div>
              </li>
              <li>
                  <button class="button secondaryButton">Login</button>
              </li>
              <li>
                  <button class="button mainButton">Registro</button>
              </li>
          </ul>
      </header>
      <main>
          <section>
              <h1>Modelos de escarabajo</h1>
              <ul class="contenedorCard">
                  <li class="card">
                      <div class="contenedorImagen">
                          <img src={v50} alt="modelo 1950"/>
                      </div> 
                      <span class = "cardTitle">Modelo 1950</span>
                      <div>
                          <ul class="contenedorIconos">
                              <li>
                                  <i class="fas fa-heart colorCorazon"></i>
                                  <span>150</span>
                              </li>
                              <li>
                                  <i class="fas fa-comment"></i>
                                  <span>1.5k</span>
                              </li>
                              <li>
                                  <i class="fas fa-eye"></i>
                                  <span>120</span>
                              </li>
                          </ul>
                      </div>             
                  </li>
                  <li class="card">
                      <div class="contenedorImagen">
                          <img src={v61} alt="modelo 1961"/>
                      </div>
                      <span class = "cardTitle">Modelo 1961</span>
                      <div>
                          <ul class="contenedorIconos">
                              <li>
                                  <i class="fas fa-heart colorCorazon"></i>
                                  <span>150</span>
                              </li>
                              <li>
                                  <i class="fas fa-comment"></i>
                                  <span>1.5k</span>
                              </li>
                              <li>
                                  <i class="fas fa-eye"></i>
                                  <span>120</span>
                              </li>
                          </ul>
                      </div>      
                  </li>
                  <li class="card">
                      <div class="contenedorImagen">
                          <img src={v20} alt="modelo 2020"/>
                      </div>
                      <span class = "cardTitle">Modelo 2020</span>
                      <div>
                          <ul class="contenedorIconos">
                              <li>
                                  <i class="fas fa-heart colorCorazon"></i>
                                  <span>150</span>
                              </li>
                              <li>
                                  <i class="fas fa-comment"></i>
                                  <span>1.5k</span>
                              </li>
                              <li>
                                  <i class="fas fa-eye"></i>
                                  <span>120</span>
                              </li>
                          </ul>
                      </div>      
                  </li>
              </ul>
          </section>
          <section></section>
      </main>
      <footer></footer>      
    </div>
  );
}

export default App;
