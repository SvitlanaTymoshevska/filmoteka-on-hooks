import PropTypes from "prop-types";
import { Wrapper, Container, Message, GalleryTitle, Gallery } from "components/FilmGallery/FilmGallery.Styled";
import { FilmCard } from "components/FilmCard/FilmCard";

export const FilmList = ({error, films}) => {
    return (
        <Wrapper>
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
        </Wrapper>
    );
};

FilmList.propType = {
    error: PropTypes.string,
    film: PropTypes.shape({
        genre_ids: PropTypes.arrayOf(PropTypes.number),  
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string.isRequired,
  }),
};