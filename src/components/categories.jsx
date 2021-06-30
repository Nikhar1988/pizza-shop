import React, {useState} from  'react';
import Sorting from './sorting';



const Categories =({items}) => {

const [category, setCategory] = useState(0);


const changePizzaCategories = (index) => {
  setCategory(index);
}

    const listPizza = items && items.map((item, index) => <li key ={item} 
    onClick={() => changePizzaCategories(index)}
    className={category === index ? 'active' : ''}>{item}</li> )
    return (
        <div className="content__top">
            <div className="categories">
              <ul>
                {listPizza}
              </ul>
            </div>
                <Sorting sortingOptions={['популярноси', 'цене', 'алфавиту' ]}/>
        </div>
        
    )
}

export default Categories;