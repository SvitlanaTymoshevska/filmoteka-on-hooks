import PropTypes from "prop-types";
import { Wrapper, Container, GalleryTitle, Gallery } from "components/FilmGallery/FilmGallery.Styled";
import { FilmCard } from "components/FilmGallery/FilmCard";

export const FilmList = ({films}) => {
    return (
        <Wrapper>
            <GalleryTitle>Films gallery</GalleryTitle>
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
    film: PropTypes.shape({
        genre_ids: PropTypes.arrayOf(PropTypes.number),  
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string.isRequired,
  }),
};