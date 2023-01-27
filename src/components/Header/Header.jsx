import { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as FilmIcon } from "components/Header/images/film-icon.svg";
import { ImSearch } from 'react-icons/im';
import { IoClose } from "react-icons/io5";
import { Wrapper, Container, Form, Input, CleanButton, SubmitButton, Message,  Nav, Link, SiteName, NavList, NavItem  } from "components/Header/Header.styled";

export const Header = ({ onSubmitOrClean, error }) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    };

    const handleClean = () => {
        setValue("");
        onSubmitOrClean("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitOrClean(value.trim());
    };

    return (
        <Wrapper>
            <Container>
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
                <Form onSubmit={handleSubmit}>
                    <Input                        
                        name="input"
                        type="text"
                        value={value}
                        autoComplete="off"
                        placeholder="Movie search"
                        onChange={handleChange}
                    />

                    <CleanButton type="button" onClick={handleClean}>
                        <IoClose size={20} />
                    </CleanButton>
                    <SubmitButton type="submit">
                        <ImSearch size={16} />
                    </SubmitButton>
                </Form>

                {error && 
                <Message>
                    Search result not successful. Enter the correct movie name and repeat
                </Message>}
            </Container>
        </Wrapper>
    );
};

Header.propTypes = {
    onSubmitOrClean: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
};