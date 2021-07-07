import React, { useEffect } from 'react';
import { Header} from './components';
import { Home, Cart } from './pages';
import {Route} from 'react-router-dom';
import getResource from './services/pizza-service';
import setPizzas from './redux/actions/pizzas';
import {useDispatch} from 'react-redux';

import './scss/app.scss';

 
const App = () => {
  
  const dispatch = useDispatch();

  window.test=()=>{
    getResource().then(json => dispatch(setPizzas(json.pizzas)))
  }



  useEffect(()=>{
    getResource().then(json => dispatch(setPizzas(json.pizzas)));
  },[]);
    
  return (
    <>
     <div className="wrapper">
        <Header/>
      <div className="content">
        <Route path='/' component = {Home} exact/>
        <Route path='/cart' component = {Cart}/>
      </div>
    </div>
    </>
     
  )
}

export default App;