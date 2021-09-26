import './App.css';
import {Switch, Route, Redirect} from "react-router-dom"
import Login from './components/pages/Login';
import Logado from './components/pages/Logado';
import { useState } from 'react';

function App() {

    const [user, setUser] = useState()

  return (
    <div className="App">
      <Switch>
        <Route exact path = "/"> 
          <Login setUser = {setUser} />
        </Route>

        <Route exact path = "/logado">
          <Logado user = {user}/>  
        </Route>
      </Switch>
    </div>
  );
}

export default App;
