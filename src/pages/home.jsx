import React from 'react';
import { Categories } from '../components';
import ChoisePizzaBlock from '../components/choise-pizza-block';

export default function Home({items}) {
    
    return (
        <div>
            <div className="container">
            <Categories  
            items={['Все','Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']}/>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((item) => <ChoisePizzaBlock key={item.id} {...item} />)}                
            </div>
            </div>
        </div>
    )
};
