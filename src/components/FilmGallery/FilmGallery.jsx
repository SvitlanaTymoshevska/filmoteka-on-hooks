import PropTypes from "prop-types";
import {Container, Message, GalleryTitle, Gallery } from "components/FilmGallery/FilmGallery.Styled";
import { FilmCard } from "components/FilmCard/FilmCard";

export const FilmGallery = ({error, films}) => {
    return (
        <>
            <GalleryTitle>Films gallery</GalleryTitle>
            {error &&
                <Message>
                    Search result not successful. Enter the correct movie name and repeat.
                </Message>}            
            <Container>
                <Gallery>
                    {films.map((film) => { 
                        return (
                            <FilmCard
                                key={film.id}
                                film={film}
                            />
                        )              
                    })}
                </Gallery>
            </Container>
        </>
    );
};

FilmGallery.propType = {
    error: PropTypes.string,
    film: PropTypes.shape({
        genre_ids: PropTypes.arrayOf(PropTypes.number),  
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string.isRequired,
  }),
};