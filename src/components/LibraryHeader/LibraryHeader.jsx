import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "components/Navigation/Navigation";
import { Loader } from "components/Loader/Loader";
import { Wrapper, Container } from "components/LibraryHeader/LibraryHeader.styled";

export const LibraryHeader = () => {

    return (
        <>
            <Wrapper>
                <Container>
                    <Navigation />
                </Container>      
            </Wrapper>
            <Suspense
                fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};