import 'styles/styles.css';
import Index from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modelo60 from 'pages/modelo60';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>                
                <Route path='/modelo60'>
                    <Modelo60/>
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
