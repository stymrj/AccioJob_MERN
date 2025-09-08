import { useEffect, useState } from "react"

export function MovieSearch() {
    const [movie, setMovie] = useState([])
    const [query, setQuery] = useState("")

    async function getMovie() {

        if (!query) {
            return;
        }

        const res = await fetch('https://www.omdbapi.com/?s=query&apikey=99eb9fd1')
        const data = await res.json()

        if (data.Response === 'True') {
            setMovie(data.Search)
            console.log(data.Search)
        } else {
            setMovie([])
            console.log("Movie Not Found")
        }
    }

    return (
        <div>
            <h1>Search Movie</h1>
            <input onChange={(e) => { setQuery(e.target.value) }} value={query} type="text" placeholder="Search your fav movie" />
            <button onClick={getMovie}>Search</button>

            <div>
                {movie.map((m) => (
                    <div style={{ border: "2px" }} key={m.imdbID}>
                        <h1>{m.Title}</h1>
                        <h3>{m.Year}</h3>
                        <h3>{m.Type}</h3>
                        <img src={m.Poster} alt="Loading..." />
                    </div>
                ))}
            </div>
        </div>
    )
}
