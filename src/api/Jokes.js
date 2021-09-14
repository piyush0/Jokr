const API_URL = 'https://icanhazdadjoke.com/';

function sendRequest(path, params) {
    const options = {
        headers: new Headers({'Accept': 'application/json'})
    };
    const url = new URL(API_URL + path);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return fetch(url, options);
}

export async function fetchJokes(page = 1, limit = 8) {
    const response = await sendRequest('search', {page, limit});
    return await response.json();
}