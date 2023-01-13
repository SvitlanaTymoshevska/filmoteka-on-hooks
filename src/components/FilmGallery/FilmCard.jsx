import PropTypes from "prop-types";
import { Card, Img, Info, Title } from "components/FilmGallery/FilmGallery.Styled";


export const FilmCard = ({ film }) => {
  const { poster_path, title, genre_ids, release_date, id } = film;
  return (
        <Card>
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
                sizes="(max-width: 320px) 280px,
                       (max-width: 768px) 340px,
                       400px"/>

        <Info>
            <Title>{title}</Title>
          {/* <p class="films__genres">${genresList(genre_ids)} ${generateYear(release_date)}</p> */}
        </Info>
      </Card>
    );
};