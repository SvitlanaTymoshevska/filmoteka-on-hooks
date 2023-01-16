import { useState, useEffect } from "react";

import { fetchGenres, fetchFilms } from "services/api/api-films-service";
import { STATUS, PAGINATION_PAGE } from "constants/status";
import { theme } from "constants/theme";

import { Wrapper } from "components/App.styled";

import { Header } from "components/Header/Header";
import { Audio } from 'react-loader-spinner';
import { FilmList } from "components/FilmGallery/FilmGallery";
import { Pagination } from "components/Pagination/Pagination";


export const App = () => {
  const [status, setStatus] = useState(STATUS.idle);
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [paginationPage, setPaginationPage] = useState(PAGINATION_PAGE.firts);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const handleSubmitOrClean = (value) => { 
    setQuery(value);
    setError(false);
  };

  const handlePaginationClick = (page, paginationPage) => {
    setPage(page);
    setPaginationPage(paginationPage);
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
          onClick={handlePaginationClick}
          currentPage={page}
          currentPaginationPage={paginationPage}
          totalPages={totalPages}
        />}
    </Wrapper>
  );
};