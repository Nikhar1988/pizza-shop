import React from 'react';
import { Categories } from '../components';
import ChoisePizzaBlock from '../components/choise-pizza-block';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';
import { addPizzaToCart } from '../redux/actions/cart';

const pizzaCategory = ['Мясные', 'Вегетарианская','Гриль','Острые','Закрытые'];


export default function Home() {

const dispatch = useDispatch()    
const {items, isLoaded} = useSelector(state => state.pizzas );
const {cartItems} = useSelector(state => state.cart );
const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
}
 
return (
        <div>
            <div className="container">
                <Categories 
                    pizzaCategory={pizzaCategory}/>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded 
                    ? items.map((item) => <ChoisePizzaBlock 
                                                addedCount ={cartItems[item.id] && cartItems[item.id].length}    
                                                onClickAddPizza={handleAddPizzaToCart} 
                                                key={item.id} 
                                                {...item}                                                    
                                                />) 
                    : Array(12).fill(0).map((_, index) => <Loader key={index}/>)}                
                </div>
            </div>
        </div>
    )
};
