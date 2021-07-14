import React, {useState, memo} from  'react';
import Sorting from './sorting';
import { setCategory } from '../redux/actions/filters';
import { useDispatch } from 'react-redux';

const sortingOptions = [
    {name:'популярноси', type: 'popular'}, 
    {name:'цене', type: 'price'}, 
    {name:'алфавиту', type: 'alphabet'}];

const Categories = memo(({pizzaCategory}) => {

const dispatch = useDispatch();

const [category, setCategoryState] = useState(0);

const changePizzaCategories = (index) => {
  dispatch(setCategory(index));
  setCategoryState(index);  
}




    const listPizza = pizzaCategory && pizzaCategory.map((item, index) => <li 
        key ={item} 
        onClick={() => changePizzaCategories(index)}
        className={category === index ? 'active' : ''}>{item}</li> )
    return (
        <div className="content__top">
            <div className="categories">
              <ul>
                {listPizza}
              </ul>
            </div>
                <Sorting sortingOptions={sortingOptions}/>
        </div>
        
    )
})

export default Categories;