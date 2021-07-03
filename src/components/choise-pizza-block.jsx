import React, {useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

 const ChoisePizzaBlock = ({id, imageUrl, name, price, types, sizes}) => {
    
    const [indexSize, setIndexSize]= useState(0);
    const [indexFormPizza, setIndexFormPizza]= useState(types[0]);
    const formPizza =['тонкое','традиционное'];
    const sizePizza =[26,30,40]; 
    const choiseSizePizzas = (index) => {
        setIndexSize(index);
    }
    
    const choiseFormPizza = (index) => {
        setIndexFormPizza(index);
    }

    return (
             <div key={id} className="pizza-block">
                        <img
                            className="pizza-block__image"
                            src={imageUrl}
                            alt="Pizza"
                        />
                        <h4 className="pizza-block__title">{name}</h4>
                        <div className="pizza-block__selector">
                            <ul>
                            {formPizza.map((item,index) => 
                                <li 
                                    key={item}
                                   className={classNames({
                                       active: indexFormPizza === index,
                                       disabled: !types.includes(index)
                                   })} 
                                    onClick = {() => choiseFormPizza(index)}
                                >{item}</li>)}
                            </ul>
                            <ul>
                                {sizePizza.map((item,index) => 
                                <li 
                                    key={item}
                                    className={classNames({
                                        active: indexSize === index,
                                        disabled: !sizes.includes(item)
                                    })}
                                    onClick = {() => choiseSizePizzas(index)}
                                >{item} см.</li>)}
                            </ul>
                        </div>
                        <div className="pizza-block__bottom">
                            <div className="pizza-block__price">от {price} ₽</div>
                            <div className="button button--outline button--add">
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                    />
                                </svg>
                                <span>Добавить</span>
                                <i>2</i>
                            </div>
                        </div>
                    </div>
    )
}

ChoisePizzaBlock.propTypes = {
    name:PropTypes.string.isRequired,
    imageUrl:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    types:PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes:PropTypes.arrayOf(PropTypes.number).isRequired
};


ChoisePizzaBlock.defaultProps = {
        name: '---',
        price: 0,
        types:[],
        sizes:[]
}

export default ChoisePizzaBlock;