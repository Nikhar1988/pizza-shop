import getResource from "../../services/pizza-service";


export const fetchPizzas = (categoryy, sortBy) => async (dispatch) => {
    dispatch(setLoader(false))
    const response = await getResource(categoryy, sortBy);

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

