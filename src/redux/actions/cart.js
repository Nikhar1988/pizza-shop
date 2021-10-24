const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
});

const setTotalPrice = (price) => ({
    type: 'SET_TOTAL_PRICE',
    payload: price
});

const setTotalCount = (count) => ({
    type: 'SET_TOTAL_COUNT',
    payload: count
});

export {
    setTotalPrice,
    setTotalCount,
    addPizzaToCart
}