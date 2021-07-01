import React, {useState, useEffect} from 'react';
import { Header} from './components';
import { Home, Cart } from './pages';
import {Route} from 'react-router-dom';
import getResource from './services/pizza-service';

import './scss/app.scss';

function App() {

const [ pizzas, setPizzas] = useState(); 

useEffect(() => {
  getResource().then(json => setPizzas(json.pizzas))
},[]);
  

console.log(pizzas)


  return (
    <>
     <div className="wrapper">
        <Header/>
      <div className="content">
        <Route path='/' component={Home} exact/>
        <Route path='/cart' component={Cart} />
      </div>
    </div>
    </>
    
    
  );
}

export default App;
