import { useState, useEffect } from "react";

import { getPopularFilms } from "services/api-films-service";

import { Wrapper } from "components/App.styled";
import { Header } from "components/Header/Header";
import { FilmList } from "components/FilmGallery/FilmGallery";


export const App = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("")

  const handleSubmit = (value) => { 
    setQuery(value);
  };
  console.log(query);

  useEffect(() => {
    async function getFilms() {
      try {
        const popularFilms = await getPopularFilms(page);
        setFilms(popularFilms);
      } catch (error) {
        
      }
    };
    getFilms();
  }, [page]);

  return (
    <Wrapper>
      <Header onSubmit={handleSubmit}></Header>
      <FilmList films={films}></FilmList>
    </Wrapper>
  );
};
