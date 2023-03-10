import {PropTypes} from "prop-types";
import { Container, Img, Plug } from "components/FilmDetails/FilmDetails.Styled";

const getYear = (release_date) => {
    let year = '';
    
    if (!release_date) {
    return year;
    }
    year = ` (${release_date?.slice(0, 4)})`;
    return year;
}

const getGenreNames = (genres) => {
    let genreNames = "unknown";

    if (!genres) {
        return genreNames;
    }
    genreNames = genres.map(genre => genre.name).join(", ");
    return genreNames;
}

export const FilmDetails = ({ film }) => { 
    const { poster_path, genres, overview, title, release_date, vote_average } = film;

    const poster = poster_path ? (
        <Img
            src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
            alt={`Poster of the film ${title}`}
            loading="lazy"
        />
    ) : <Plug>Poster not found</Plug>;   
    
    const userScore = (vote_average * 10).toFixed(0);

    return (
        <Container>
            {poster}
            <div>
                <h2>{title}{getYear(release_date)}</h2>
                <p>User Score {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{getGenreNames(genres)}</p>
            </div>
        </Container>
    );
};

FilmDetails.propTypes = {
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    overview: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
};