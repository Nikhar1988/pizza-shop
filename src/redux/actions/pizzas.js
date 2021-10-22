import getResource from "../../services/pizza-service";


export const fetchPizzas = (category, sortBy) => async (dispatch) => {
    dispatch(setLoader(false))
    const response = await getResource(category, sortBy);

    dispatch(setPizzas(response))

}
export const setLoader = (payload) => ({
    type: 'SET_LOADER',
    payload
});

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

