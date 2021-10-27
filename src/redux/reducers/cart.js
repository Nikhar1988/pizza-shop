const initialState = {
    cartItems: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (arr) => {
    return arr.reduce((sum, obj) => obj.price + sum, 0);
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const currentPizzaItems = !state.cartItems[action.payload.id]
                ? [action.payload]
                : [...state.cartItems[action.payload.id].items, action.payload]

            const newItems = {
                ...state.cartItems,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            };

            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas)


            return {
                ...state,
                cartItems: newItems,
                totalCount: allPizzas.length,
                totalPrice
            };

        case 'CLEAR_CART':
            return {
                cartItems: {},
                totalCount: 0,
                totalPrice: 0
            };

        case 'REMOVE_ITEM':
            const deliteItems = {
                ...state.cartItems,
            }
            delete deliteItems[action.payload]

            const ItemsAfterDelete = Object.values(deliteItems).map(obj => obj.items);
            const allPizzasAfterDelete = [].concat.apply([], ItemsAfterDelete);
            const totalPriceAfterDelete = getTotalPrice(allPizzasAfterDelete)

            return {
                totalCount: allPizzasAfterDelete.length,
                totalPrice: totalPriceAfterDelete,
                cartItems: deliteItems
            };


        default:
            return state;
    }
}


export default cart;
