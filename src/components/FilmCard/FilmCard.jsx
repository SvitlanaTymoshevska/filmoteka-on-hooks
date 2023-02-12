import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Card, StyledLink, Img, Plug, Info, Title, Genres } from "components/FilmCard/FilmCard.styled";

const genresList = (filmGenresID) => {
  const genresArray = JSON.parse(localStorage.getItem('genres'));
  if (!genresArray) {
      return "unknown";
  }
  
  const filtredGenresArray = filmGenresID.map(genreID => genresArray.find(genre => genre.id === genreID).name);
  let cuttedGenresArray = [];

  if (filtredGenresArray.length > 2) {
    cuttedGenresArray = [...filtredGenresArray.slice(0, 2), "Otheres"];
  } else {
    cuttedGenresArray = [...filtredGenresArray];
  };

  return cuttedGenresArray.join(", ");
}

const year = (release_date) => {
  let year = '';
  if (!release_date) {
    return year;
  }
  year = ' | ' + release_date?.slice(0, 4);
  return year;
}

export const FilmCard = ({ film }) => {
  const { poster_path, title, genre_ids, release_date, id } = film;
  const location = useLocation();
  
  const poster = poster_path ? (
    <Img
          srcSet={`
              https://image.tmdb.org/t/p/w300/${poster_path}     300w,
              https://image.tmdb.org/t/p/w500/${poster_path}     500w,
              https://image.tmdb.org/t/p/w780/${poster_path}     780w,
              https://image.tmdb.org/t/p/w1280/${poster_path}    1280w,
              https://image.tmdb.org/t/p/original/${poster_path} 2000w
          `}
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={`Poster of the film ${title}`}
          sizes="(max-width: 320px) 280px, (max-width: 768px) 340px, 400px"
    />
  ) : <Plug>Poster not found</Plug>;   

  return (
    <Card>
      <StyledLink to={`film/${id}`} state={{ from: location }}>
        {poster}
        <Info>
          <Title>{title}</Title>
          <Genres>{genresList(genre_ids)}{year(release_date)}</Genres>
        </Info>
      </StyledLink>
    </Card>
  );
};

FilmCard.propType = {
  film: PropTypes.shape({
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};