import React from 'react';
import { Header} from './components';
import { Home, Cart } from './pages';
import {Route} from 'react-router-dom';

import './scss/app.scss';


function App() {
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
