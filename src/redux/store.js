import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch(action.type) {
        case 'INC':
            return state;
        default:
            return state;
    }
}



const store = createStore(reducer);

export default store;

