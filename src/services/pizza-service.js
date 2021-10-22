const getResource = async (category, {type, order}) => {

    const res = await fetch(`http://localhost:3001/pizzas?${category === null ? '' : `category=${category}`}&_sort=${type}&_order=${order}`);

    if (!res.ok) {
        throw new Error(`Could not fetch` +
            `, received ${res.status}`)
    }

    const data = await res.json();

    return data;
};

export default getResource;