// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

export const mockData = {
    mockJokesPage1: [
        {
            "id": "0189hNRf2g",
            "joke": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
        },
        {
            "id": "08EQZ8EQukb",
            "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
        },
        {
            "id": "08xHQCdx5Ed",
            "joke": "Why didn’t the skeleton cross the road? Because he had no guts."
        },
        {
            "id": "0DQKB51oGlb",
            "joke": "What did one nut say as he chased another nut?  I'm a cashew!"
        },
        {
            "id": "0DtrrOZDlyd",
            "joke": "Chances are if you' ve seen one shopping center, you've seen a mall."
        },
        {
            "id": "0LuXvkq4Muc",
            "joke": "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take."
        },
        {
            "id": "0ga2EdN7prc",
            "joke": "How come the stadium got hot after the game? Because all of the fans left."
        },
        {
            "id": "0oO71TSv4Ed",
            "joke": "Why was it called the dark ages? Because of all the knights. "
        },
        {
            "id": "0oz51ozk3ob",
            "joke": "A steak pun is a rare medium well done."
        },
        {
            "id": "0ozAXv4Mmjb",
            "joke": "Why did the tomato blush? Because it saw the salad dressing."
        }
    ]
}