import { useState, Suspense } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import { Navigation } from "components/Navigation/Navigation";
import { Audio } from 'react-loader-spinner';
import { theme } from "constants/theme";
import { ImSearch } from 'react-icons/im';
import { IoClose } from "react-icons/io5";
import { Wrapper, Container, Form, Input, CleanButton, SubmitButton } from "components/HomeHeader/HomeHeader.styled";

export const HomeHeader = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") ?? "";
    const [value, setValue] = useState(searchQuery);

    const handleChange = (event) => {
        setValue(event.currentTarget.value);
    };

    const handleSubmitOrClean = (query) => { 
        const nextParams = query !== "" ? { query, page: "1" } : { };
        setSearchParams(nextParams);
    };

    const handleClean = () => {
        setValue("");
        handleSubmitOrClean("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitOrClean(value.trim());
    };

    return (
        <>
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

                        <CleanButton type="button" onClick={handleClean}>
                            <IoClose size={20} />
                        </CleanButton>
                        <SubmitButton type="submit">
                            <ImSearch size={16} />
                        </SubmitButton>
                    </Form>
                </Container>      
            </Wrapper>
            <Suspense
                fallback={
                    <Audio
                        height="100"
                        width="100"
                        color={theme.colors.accent}
                        ariaLabel="audio-loading"
                        wrapperStyle={{"justifyContent":"center"}}
                        visible={true}
                    />}>
                <Outlet />
            </Suspense>
        </>
    );
};