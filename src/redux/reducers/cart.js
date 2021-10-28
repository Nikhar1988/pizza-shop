const initialState = {
    cartItems: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (arr) => {
    return arr.reduce((sum, obj) => obj.price + sum, 0);
}
const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };
  
  const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
    }, 0);
  };
  

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
            
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');


            return {
                ...state,
                cartItems: newItems,
                totalCount,
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
            const currentTotalPrice = deliteItems[action.payload].totalPrice
            const currentTotalCount = deliteItems[action.payload].items.length
            delete deliteItems[action.payload]

            return {
                totalCount: state.totalCount - currentTotalCount, 
                totalPrice: state.totalPrice - currentTotalPrice,
                cartItems: deliteItems
            };
        
        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.cartItems[action.payload].items,
                state.cartItems[action.payload].items[0],
            ];
            const newItems = {
                ...state.cartItems,
                [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
                },
            };
        
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
        
            return {
                ...state,
                cartItems: newItems,
                totalCount,
                totalPrice,
            };
            }
          
            case 'MINUS_CART_ITEM': {
                const oldItems = state.cartItems[action.payload].items;
                const newObjItems =
                  oldItems.length > 1 ? state.cartItems[action.payload].items.slice(1) : oldItems;
                const newItems = {
                  ...state.cartItems,
                  [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                  },
                };
          
                const totalCount = getTotalSum(newItems, 'items.length');
                const totalPrice = getTotalSum(newItems, 'totalPrice');
          
                return {
                  ...state,
                  cartItems: newItems,
                  totalCount,
                  totalPrice,
                };
              }


        default:
            return state;
    }
}


export default cart;
