const getResource = async (category, sortBy) => {

    const res = await fetch(`http://localhost:3001/pizzas?category=${category}`);

    if (!res.ok) {
        throw new Error(`Could not fetch` +
            `, received ${res.status}`)
    }

    const data = await res.json();

    return data;
};

export default getResource;