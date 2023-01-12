import { useState } from "react";
import PropTypes from "prop-types";
import { ImSearch } from 'react-icons/im';
import { Wrapper, Container, Form, Input, Submit, Message } from "components/Header/Header.styled";

export const Header = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value.trim());
        setValue("");
    };

    return (
        <Wrapper>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input                        
                        name="input"
                        type="text"
                        value={value}
                        autoComplete="off"
                        placeholder="Movie search"
                        onChange={handleChange}
                    />

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