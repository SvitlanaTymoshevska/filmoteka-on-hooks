import { useState } from "react";
import PropTypes from "prop-types";
import { Navigation } from "components/Header/Navigation";
import { ImSearch } from 'react-icons/im';
import { IoClose } from "react-icons/io5";
import { Wrapper, Container, Form, Input, Clean, Submit, Message } from "components/Header/Header.styled";

export const Header = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    };

    const handleClean = () => {
         setValue("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value.trim());
    };

    return (
        <Wrapper>
            <Container>
                <Navigation />
                <Form onSubmit={handleSubmit}>
                    <Input                        
                        name="input"
                        type="text"
                        value={value}
                        autoComplete="off"
                        placeholder="Movie search"
                        onChange={handleChange}
                    />

                    <Clean type="button" onClick={handleClean}>
                        <IoClose size={20} />
                    </Clean>
                    <Submit type="submit">
                        <ImSearch size={16} />
                    </Submit>
                </Form>

                <Message>
                    Search result not successful. Enter the correct movie name and repeat
                </Message>
            </Container>
        </Wrapper>
    );
};

Header.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };