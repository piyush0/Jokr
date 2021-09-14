import {useEffect, useState} from "react";
import {fetchJokes} from "../api/Jokes";
import './Jokes.css'

export function JokesList({jokes}) {
    return (
        <ul data-testid="list">
            {jokes.map((j) => {
                return <li key={j.id}><p>{j.joke}</p></li>;
            })}
        </ul>
    );
}

export function Navigation({page, setPage}) {
    return (
        <div className="navigation">
            <button disabled={page === 1} onClick={() => setPage(page => page - 1)}>Back</button>
            <button onClick={() => setPage(page => page + 1)}>Next</button>
        </div>
    )
}

export function Loader() {
    return (<div className="loader" data-testid="loader">.....</div>)
}

export default function Jokes() {
    const [jokes, setJokes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getJokes(page) {
            setIsLoading(true);
            const response = await fetchJokes(page);
            setIsLoading(false);

            if (response.status !== 200) {
                setError("Some error occurred.")
            } else {
                setJokes(response.results);
            }
        }

        getJokes(currentPage);

    }, [currentPage]);

    return (
        <div className="container">
            <h2>Jokes</h2>
            {isLoading ? <Loader/> : null}
            {error ? <div> {error} </div> : null}
            <JokesList jokes={jokes}/>
            <Navigation page={currentPage} setPage={setCurrentPage}/>
        </div>
    )
}