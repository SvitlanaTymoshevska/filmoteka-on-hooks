import { ReactComponent as FilmIcon } from "components/Header/images/film-icon.svg";
import { Nav, Link, SiteName, NavList, NavItem } from "components/Header/Header.styled";

export const Navigation = () => {
    return (
        <Nav>
            <Link>
                <FilmIcon/>
                <SiteName>Filmoteka</SiteName>
            </Link>
            <NavList>
                <NavItem>
                    <Link>
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link>
                        My library
                    </Link>
                </NavItem>
            </NavList>
        </Nav>
    );
};