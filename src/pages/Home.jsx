import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchGenres, fetchFilms } from "services/api-films-service";

import { FilmList } from "components/FilmGallery/FilmGallery";
import { Pagination } from "components/Pagination/Pagination";


const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const page = searchParams.get("page") ?? "1";

    const [films, setFilms] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(false);

    // Fetching genres
    useEffect(() => {
        async function getGenres() {
            try {
                const genres = await fetchGenres();
                localStorage.setItem('genres', JSON.stringify(genres));
            } catch (error) {
                console.log(error.message);
            }
        };
        getGenres();
    }, []);
    
    // Fetching films
    useEffect(() => {
        async function getFilms() {
            try {
                const [films,  totalPages] = await fetchFilms(Number(page), query);
                setFilms(films);
                setTotalPages(totalPages);
            } catch (error) {
                setError(true);
            }
        };
        getFilms();
    }, [page, query]);

    // Delete the error message
    useEffect(() => {
        if (error) {
            setSearchParams({});
            setTimeout(() => {setError(false) }, 3000);
        }  
    }, [error, setSearchParams]);

    return (
        films &&
            <>  
                <FilmList
                    error={error}
                    films={films}/>
                <Pagination
                    currentPage={Number(page)}
                    totalPageCount={totalPages}
                    onPageChange={page => setSearchParams(query !== "" ? { query, page } : { page })}/>
            </>
    );
};

export default Home;