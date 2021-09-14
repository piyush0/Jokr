import {fireEvent, render, screen, waitFor, within} from '@testing-library/react';
import Jokes, {JokesList, Navigation} from "./Jokes";
import {mockData} from "../setupTests";


describe('Jokes', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    const mockJokes = mockData["mockJokesPage1"]
    test('Navigation renders 2 buttons', async () => {
        render(<Navigation/>);

        const buttons = await screen.findAllByRole('button');
        expect(buttons).toHaveLength(2);
    });

    test('Jokes List renders jokes', async () => {

        render(<JokesList jokes={mockJokes}/>);

        const jokesList = screen.getByTestId('list');

        const {getAllByRole} = within(jokesList)
        const items = getAllByRole("listitem")
        expect(items.length).toBe(mockJokes.length)
    });

    test('Render Jokes', async () => {
        fetch.mockResponseOnce(JSON.stringify({status: 200, results: mockJokes}));
        render(<Jokes/>);
        const loader = screen.getByTestId('loader');
        await waitFor(() => {
            expect(loader).not.toBeInTheDocument();
            const jokesList = screen.getByTestId('list');
            const {getAllByRole} = within(jokesList)
            const items = getAllByRole("listitem")
            expect(items.length).toBe(mockJokes.length)
        })
        expect(fetch).toHaveBeenCalledTimes(1);
    })

    test('Clicking next re-render Jokes', async () => {
        fetch.mockResponseOnce(JSON.stringify({status: 200, results: mockJokes}));
        render(<Jokes/>);
        const loader = screen.getByTestId('loader');
        await waitFor(() => {
            expect(loader).not.toBeInTheDocument();
            expect(fetch).toHaveBeenCalledTimes(1);
            const nextButton = screen.getByText(/next/i)
            fetch.mockResponseOnce(JSON.stringify({status: 200, results: mockJokes}));
            fireEvent.click(nextButton);
            expect(fetch).toHaveBeenCalledTimes(1);
        })
    })
})



