import React, {memo} from  'react';
import Sorting from './Sorting';
import { setCategory } from '../redux/actions/filters';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

const sortingOptions = [
    {name: 'популярноси', type: 'popular', order: 'desc'}, 
    {name: 'цене', type: 'price', order: 'desc'}, 
    {name: 'алфавиту', type: 'name', order: 'asc'}];

const Categories = memo(({pizzaCategory}) => {
  const {sortBy, category} = useSelector(state => state.filters );
  const dispatch = useDispatch();

  const changePizzaCategories = (index) => {
    dispatch(setCategory(index));
  }

  const listPizza = pizzaCategory && pizzaCategory.map((item, index) => <li 
      key ={item} 
      onClick={() => changePizzaCategories(index)}
      className={classNames({
        active: category === index 
      })}>{item}</li> )
    
    
  return (
      <div className="content__top">
          <div className="categories">
            <ul>
              <li  
                  onClick={() => changePizzaCategories(null)}
                  className={classNames({
                    active: category === null 
                  })}
              >Все
              </li>
              {listPizza}
            </ul>
          </div>
              <Sorting sortingOptions={sortingOptions} sortType = {sortBy.type}/>
      </div>
      
  )
})

export default Categories;
