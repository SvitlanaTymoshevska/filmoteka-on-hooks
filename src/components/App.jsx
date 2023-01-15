import { useState, useEffect } from "react";

import { fetchGenres, fetchFilms } from "services/api/api-films-service";
import { STATUS } from "constants/status";
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
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  console.log(setPage);

  const handleSubmitOrClean = (value) => { 
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
        const films = await fetchFilms(page, query);
        setFilms(films);
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
        error={error}></Header>

      {status === STATUS.resolved &&
        <FilmList films={films}></FilmList>}
      
      {status === STATUS.pending &&
        <Audio
          height="100"
          width="100"
          color={theme.colors.filmsDescription}
          ariaLabel="audio-loading"
          wrapperStyle={{"justifyContent":"center"}}
          visible={true}
        />}

      <Pagination />
    </Wrapper>
  );
};