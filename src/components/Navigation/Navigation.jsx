import { ReactComponent as FilmIcon } from "components/Navigation/images/film-icon.svg";
import { Nav, StyledLink, StyledNavLink, SiteName, NavList, NavItem } from "components/Navigation/Navigation.styled";

export const Navigation = () => {
    return (
        <Nav>
            <StyledLink to="/">
                <FilmIcon/>
                <SiteName>Filmoteka</SiteName>
            </StyledLink>
            <NavList>
                <NavItem>
                    <StyledNavLink to="/" end>Home</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/library">My library</StyledNavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
};