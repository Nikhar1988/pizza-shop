import React, {useState, memo} from  'react';
import Sorting from './sorting';
import { setCategory } from '../redux/actions/filters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';

const sortingOptions = [
    {name: 'популярноси', type: 'popular'}, 
    {name: 'цене', type: 'price'}, 
    {name: 'алфавиту', type: 'alphabet'}];

const Categories = memo(({pizzaCategory}) => {
  const {sortBy, category} = useSelector(state => state.filters );
  const dispatch = useDispatch();

  const changePizzaCategories = (index) => {
    dispatch(setCategory(index));
    dispatch(fetchPizzas()) 
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
              <Sorting sortingOptions={sortingOptions} sortType = {sortBy}/>
      </div>
      
  )
})

export default Categories;