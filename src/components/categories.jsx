import React from  'react';
import Sorting from './sorting';



const Categories =({items, changePizzaCategories}) => {

    const listPizza = items.map((item,id) => <li key ={item} onClick={() => changePizzaCategories(id)}>{item}</li> )
    return (
        <div className="content__top">
            <div className="categories">
              <ul>
                {listPizza}
              </ul>
            </div>
                <Sorting/>
        </div>
        
    )
}

export default Categories;