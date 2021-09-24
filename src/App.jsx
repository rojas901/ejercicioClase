import 'styles/styles.css';
import Index from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modelo60 from 'pages/modelo60';
import Modelo50 from 'pages/modelo50';
import Modelo2020 from 'pages/modelo2020';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/modelo50'>
                    <Modelo50/>
                </Route>                
                <Route path='/modelo60'>
                    <Modelo60/>
                </Route>
                <Route path='/modelo2020'>
                    <Modelo2020/>
                </Route>
                <Route path='/'>
                    <Index/> 
                </Route>
            </Switch>            
        </Router>              
    </div>
  );
}

export default App;
