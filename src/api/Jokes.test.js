import {fetchJokes} from "./Jokes";
import {mockData} from "../setupTests";

describe('Jokes Api', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });


    it('fetches correctly', async () => {
        const mockJokes = mockData['mockJokesPage1'];
        fetch.mockResponseOnce(JSON.stringify({status: 200, results: mockJokes}));
        const response = await fetchJokes(1, 8);

        expect(response.status).toEqual(200);
        expect(response.results).toHaveLength(mockJokes.length);
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    it("catches errors and returns null", async () => {
        fetch.mockReject(() => "API failure");

        const response = await fetchJokes(1, 8);

        expect(response).toEqual(null);
        expect(fetch).toHaveBeenCalledTimes(1);

    });
})