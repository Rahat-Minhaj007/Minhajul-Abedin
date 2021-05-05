import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import Aos from 'aos';

function App() {
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  useEffect(() =>{
    Aos.init({duration: 2000})
})


  return (
    <Router >
      {
        spinner && <Loader className='spinner'
        type="Grid" 
        color="#76c96e" 
        height={80} 
        width={80}
        timeout={4000}  
        />
      }
      { !spinner &&
        <Switch>
               {
              spinner && <Loader 
              type="Grid" 
              color="#76c96e" 
              height={80} 
              width={80}
              timeout={4000}  
              />
            }
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>


        </Switch>}
      </Router>
  );
}

export default App;

