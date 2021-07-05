import React, {Component} from 'react';
import { Header} from './components';
import { Home, Cart } from './pages';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import getResource from './services/pizza-service';
import setPizzas from './redux/actions/pizzas';

import './scss/app.scss';

 class App extends Component {

  componentDidMount() {
    getResource().then(json => this.props.setPizzasAction(json.pizzas));
  }

  render() {
    const {pizzas} = this.props;
    return (
      <>
       <div className="wrapper">
          <Header/>
        <div className="content">
          <Route path='/' render={() => <Home items={pizzas}/>} exact/>
          <Route path='/cart' component={Cart} />
        </div>
      </div>
      </>
       
    );
  }
}

const mapStateToProps = (state) => {
  return{
    pizzas:state.pizzas.items
  }
}


const mapDispatchToProps = (dispatch)=> {
  return {
      setPizzasAction: (items) => dispatch(setPizzas(items))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);