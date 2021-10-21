import React from 'react';
import { Categories } from '../components';
import ChoisePizzaBlock from '../components/choise-pizza-block';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';

const pizzaCategory = ['Мясные', 'Вегетарианская','Гриль','Острые','Закрытые'];


export default function Home() {

const {items, isLoaded} = useSelector(state => state.pizzas );
    return (
        <div>
            <div className="container">
                <Categories 
                    pizzaCategory={pizzaCategory}/>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded ? 
                    items.map((item) => <ChoisePizzaBlock key={item.id} {...item} />) 
                    : Array(12).fill(0).map((_, index) => <Loader key={index}/>)}                
                </div>
            </div>
        </div>
    )
};
