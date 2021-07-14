const getResource = async () => {
    const res = await fetch('http://localhost:3001/pizzas');

    if (!res.ok) {
        throw new Error(`Could not fetch` +
            `, received ${res.status}`)
    }

    return await res.json();
};

export default getResource;