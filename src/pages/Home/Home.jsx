import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchGenres, fetchFilms } from "services/api-films-service";
import { Wrapper } from "pages/Home/Home.styled";
import { FilmGallery } from "components/FilmGallery/FilmGallery";
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
        window.scrollTo(0, 0);
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
            <Wrapper>  
                <FilmGallery
                    error={error}
                    films={films}/>
                <Pagination
                    currentPage={Number(page)}
                    totalPageCount={totalPages}
                    onPageChange={page => setSearchParams(query !== "" ? { query, page } : { page })}/>
            </Wrapper>
    );
};

export default Home;