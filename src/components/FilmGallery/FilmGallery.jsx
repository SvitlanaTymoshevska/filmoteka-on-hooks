import PropTypes from "prop-types";
import { FilmCard } from "components/FilmGallery/FilmCard";
import { Wrapper, Container, Gallery } from "components/FilmGallery/FilmGallery.Styled";

export const FilmList = ({films}) => {
    return (
        <Wrapper>
            {/* <h2 style="display: none">Cards of Films</h2> */}
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