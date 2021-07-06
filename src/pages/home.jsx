import React from 'react';
import { Categories } from '../components';
import ChoisePizzaBlock from '../components/choise-pizza-block';
import {useSelector} from 'react-redux';

export default function Home() {
    
const items = useSelector(state => state.pizzas.items);
    
const pizzaCategory = ['Все','Мясные', 'Вегетарианская','Гриль','Острые','Закрытые'];

    return (
        <div>
            <div className="container">
            <Categories 
            pizzaCategory={pizzaCategory}/>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((item) => <ChoisePizzaBlock key={item.id} {...item} />)}                
            </div>
            </div>
        </div>
    )
};
