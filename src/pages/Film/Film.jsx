import { useEffect, useState, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { fetchFilmByID } from "services/api-films-service";
import { BackLink } from "components/BackLink/BackLink";
import { FilmDetails } from "components/FilmDetails/FilmDetails";
import { Wrapper, Container, NavWrapper, Item, StyledLink } from "pages/Film/Film.styled"; 

const Film = () => {
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetchFilmByID(id).then(film => {
            setFilm(film);
        });
    }, [id]);

    return (
        film && (
            <Wrapper>
                <Container>
                    <BackLink to={backLinkHref}>Go back</BackLink>
                    <FilmDetails film={film} />
                    <NavWrapper>
                        <h3>Additional information</h3>
                        <ul>
                            <Item>
                                <StyledLink to="cast" id={id}>Cast</StyledLink>
                            </Item>
                            <Item>
                                <StyledLink to="reviews">Reviews</StyledLink>
                            </Item>
                        </ul>
                    </NavWrapper>
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </Container>
            </Wrapper>
        )
    );
};

export default Film;