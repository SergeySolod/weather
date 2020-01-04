import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Navbar} from "./components/navbar/navbar";
import {Home} from "./pages/home/home";
import Weather from './pages/weather/weather'
import 'weather-icons/css/weather-icons.css';

const App =() => {
  return (
      <div>
          <Navbar/>
          <div className='App'>
              <Switch>
                  <Route path='/' exact render={() => <Home/>}/>
                  <Route path='/weather' exact render={() => <Weather/>}/>
                 </Switch>
          </div>
      </div>
  );
}

export default App;
