export async function fetchJokes(page = 1, limit = 8) {
    const options = {
        headers: new Headers({'Accept': 'application/json'})
    };
    try {
        const result = await fetch(`https://icanhazdadjoke.com/search?page=${page}&limit=${limit}`, options);
        return await result.json();
    } catch (e) {
        return null;
    }
}