import { useState, useEffect } from "react";

import { fetchGenres, fetchFilms } from "services/api-films-service";
import { STATUS } from "constants/status";
import { theme } from "constants/theme";

import { Wrapper } from "components/App.styled";

import { Header } from "components/Header/Header";
import { Audio } from 'react-loader-spinner';
import { FilmList } from "components/FilmGallery/FilmGallery";
import { Pagination } from "components/Pagination/Pagination";


const Home = () => {
  const [status, setStatus] = useState(STATUS.idle);
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const handleSubmitOrClean = (value) => { 
    setPage(1);
    setQuery(value);
    setError(false);
  };

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
      setStatus(STATUS.pending);
      try {
        const [films,  totalPages] = await fetchFilms(page, query);
        setFilms(films);
        setTotalPages(totalPages);
        setStatus(STATUS.resolved);
      } catch (error) {
        setStatus(STATUS.rejected);
        setError(true);
      }
    };
    getFilms();
  }, [page, query]);

  return (
    <Wrapper>
      <Header
        onSubmitOrClean={handleSubmitOrClean}
        error={error}
      />

      {status === STATUS.resolved &&
        <FilmList
          films={films}
        />}
      
      {status === STATUS.pending &&
        <Audio
          height="100"
          width="100"
          color={theme.colors.accent}
          ariaLabel="audio-loading"
          wrapperStyle={{"justifyContent":"center"}}
          visible={true}
        />}

      {status === STATUS.resolved &&
        <Pagination
          currentPage={page}
          totalPageCount={totalPages}
          onPageChange={page => setPage(page)}
        />
      }
    </Wrapper>
  );
};

export default Home;