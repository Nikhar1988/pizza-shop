import React, { useEffect } from 'react';
import { Header} from './components';
import { Home, Cart } from './pages';
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPizzas } from './redux/actions/pizzas';
import './scss/app.scss';


 
const App = () => {
  
  const {sortBy, category} = useSelector(state => state.filters );
  
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchPizzas(category,sortBy))
  },[sortBy, category]);
    


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