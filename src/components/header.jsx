import React from 'react';
import BasketButton from './button';
import logoPage from '../assets/img/pizza-logo.svg';

const Header =() => {
    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logoPage} alt="Pizza logo" />
                    <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <BasketButton/>
            </div>
        </div>
        </>
    )
}

export default Header;