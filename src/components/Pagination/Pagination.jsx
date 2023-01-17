import PropTypes from "prop-types";
import { PAGINATION_PAGE } from "constants/status"; 
import { Container, List, Item, Button, CurrentPage, Dots } from "components/Pagination/Pagination.styled";
import { IoIosArrowRoundBack, IoIosMore, IoIosArrowRoundForward, } from "react-icons/io";

export const Pagination = ({ onClick, currentPage, currentPaginationPage, totalPages }) => {

    const handleClick = (event) => {
        const page = Number(event.target.textContent);
        let paginationPage = event.target.dataset.page;
        if (page >= 5 && page <= totalPages - 5) {
           paginationPage = PAGINATION_PAGE.n;
        };
        
        onClick(page, paginationPage);
    };

    const handleForwardClick = () => {
        const page = currentPage + 1;
        let paginationPage;
     
        if (currentPaginationPage === "firts") {
            paginationPage = "second";
        } else if (currentPaginationPage === "second") {
            paginationPage = "third";
        } else if (currentPaginationPage === "third") {
            paginationPage = "fourth";
        } else if (currentPaginationPage === "fourth") {
            paginationPage = "n";
        } else if (currentPaginationPage === "n" && page === (totalPages - 3)) {
            paginationPage = "fourthLast";
        } else if (currentPaginationPage === "fourthLast") {
            paginationPage = "thirdLast";
        } else if (currentPaginationPage === "thirdLast") {
            paginationPage = "secondLast";
        } else if (currentPaginationPage === "secondLast") {
            paginationPage = "last";
        } else { 
            paginationPage = "n";
        }

        onClick(page, paginationPage);
    };

    const handleBackClick = () => {
        const page = currentPage - 1;
        let paginationPage;
     
        if (currentPaginationPage === "last") {
            paginationPage = "secondLast";
        } else if (currentPaginationPage === "secondLast") {
            paginationPage = "thirdLast";
        } else if (currentPaginationPage === "thirdLast") {
            paginationPage = "fourthLast";
        } else if (currentPaginationPage === "fourthLast") {
            paginationPage = "n";
        } else if (currentPaginationPage === "n" && page === 4) {
            paginationPage = "fourth";
        } else if (currentPaginationPage === "fourth") {
            paginationPage = "third";
        } else if (currentPaginationPage === "third") {
            paginationPage = "second";
        } else if (currentPaginationPage === "second") {
            paginationPage = "firts";
        } else { 
            paginationPage = "n";
        }

        onClick(page, paginationPage);
    };

    if (currentPaginationPage === "firts" && currentPage <= 2) {
        return (
                <Container>
                    <List>
                        <Item>
                            <CurrentPage>{currentPage}</CurrentPage>
                        </Item>
                        <Item>
                            <Button
                                onClick={handleClick}
                                data-page={PAGINATION_PAGE.second}>
                                {currentPage + 1}
                            </Button>
                        </Item>
                        <Item>
                            <Button
                                onClick={handleClick}
                                data-page={PAGINATION_PAGE.third}>
                                {currentPage + 2}
                            </Button>
                        </Item>
                        <Item>
                            <Dots>
                                <IoIosMore size={10}/>
                            </Dots>
                        </Item>
                        <Item>
                            <Button
                                onClick={handleClick}
                                data-page={PAGINATION_PAGE.last}>
                                {totalPages}
                            </Button>
                        </Item>
                        <Item>
                            <Button
                                onClick={handleForwardClick}>
                                <IoIosArrowRoundForward size={16}/>
                            </Button>
                        </Item>
                    </List>
                </Container>
            );  
    } else if (currentPaginationPage === "second" && currentPage <= 3) {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            {currentPage - 1}
                        </Button>
                    </Item>
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.third}>
                            {currentPage + 1}
                        </Button>                        
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.fourth}>
                            {currentPage + 2}
                        </Button>                           
                    </Item>
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.last}>
                            {totalPages}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleForwardClick}>
                            <IoIosArrowRoundForward size={16}/>
                        </Button>
                    </Item>
                </List>
            </Container>
        );
    } else if (currentPaginationPage === "third" && currentPage <= 4) {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            {currentPage - 2}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.second}>
                            {currentPage - 1}
                        </Button>
                    </Item>
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.fourth}>
                            {currentPage + 1}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.n}>
                            {currentPage + 2}
                        </Button>
                    </Item>                 
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.last}>
                            {totalPages}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleForwardClick}>
                            <IoIosArrowRoundForward size={16}/>
                        </Button>
                    </Item>
                </List>
            </Container>
        );
    } else if (currentPaginationPage === "fourth" && currentPage <= 5) {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            {currentPage - 3}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.second}>
                            {currentPage - 2}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.third}>
                            {currentPage - 1}
                        </Button>
                    </Item>
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>
                        <Item>
                            <Button
                                onClick={handleClick}
                                data-page={PAGINATION_PAGE.n}>
                                {currentPage + 1}
                            </Button>
                        </Item>
                        <Item>
                            <Button
                                onClick={handleClick}
                                data-page={PAGINATION_PAGE.n}>
                                {currentPage + 2}
                            </Button>
                        </Item>               
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.last}>
                            {totalPages}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleForwardClick}>
                            <IoIosArrowRoundForward size={16}/>
                        </Button>
                    </Item>
                </List>
            </Container>
        );
    } else if (currentPaginationPage === "n") {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            1
                        </Button>
                    </Item>
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.third}>
                            {currentPage - 2}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.fourth}>
                            {currentPage - 1}
                        </Button>
                    </Item>
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.n}>
                            {currentPage + 1}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.n}>
                            {currentPage + 2}
                        </Button>
                    </Item>                 
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.last}>
                            {totalPages}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleForwardClick}>
                            <IoIosArrowRoundForward size={16}/>
                        </Button>
                    </Item>
                </List>
            </Container>
        );
    } else if (currentPaginationPage === "fourthLast" && currentPage >= totalPages - 5) {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            1
                        </Button>
                    </Item>
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.n}>
                            {currentPage - 2}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.n}>
                            {currentPage - 1}
                        </Button>
                    </Item>
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>                       
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.thirdLast}>
                            {currentPage + 1}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.secondLast}>
                            {currentPage + 2}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.last}>
                            {totalPages}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleForwardClick}>
                            <IoIosArrowRoundForward size={16}/>
                        </Button>
                    </Item>
                </List>
            </Container>
        );
    } else if (currentPaginationPage === "thirdLast" && currentPage >= totalPages - 5) {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            1
                        </Button>
                    </Item>
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.n}>
                            {currentPage - 2}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.fourthLast}>
                            {currentPage - 1}
                        </Button>
                    </Item>
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.secondLast}>
                            {currentPage + 1}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.last}>
                            {totalPages}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleForwardClick}>
                            <IoIosArrowRoundForward size={16}/>
                        </Button>
                    </Item>
                </List>
            </Container>
        );
    } else if (currentPaginationPage === "secondLast" && currentPage >= totalPages - 5) {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            1
                        </Button>
                    </Item>
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.fourthLast}>
                            {currentPage - 2}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.thirdLast}>
                            {currentPage - 1}
                        </Button>
                    </Item>
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>       
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.last}>
                            {totalPages}
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleForwardClick}>
                            <IoIosArrowRoundForward size={16}/>
                        </Button>
                    </Item>
                </List>
            </Container>
        );
    } else if (currentPaginationPage === "last" && currentPage >= totalPages - 5) {
        return (
            <Container>
                <List>
                    <Item>
                        <Button
                            onClick={handleBackClick}>
                            <IoIosArrowRoundBack size={16}/> 
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.firts}>
                            1
                        </Button>
                    </Item>
                    <Item>
                        <Dots>
                            <IoIosMore size={10}/>
                        </Dots>
                    </Item>
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.thirdLast}>
                            {currentPage - 2}
                        </Button>
                    </Item>              
                    <Item>
                        <Button
                            onClick={handleClick}
                            data-page={PAGINATION_PAGE.secondLast}>
                            {currentPage - 1}
                        </Button>
                    </Item>              
                    <Item>
                        <CurrentPage>{currentPage}</CurrentPage>
                    </Item>                 
                </List>
            </Container>
        );
    };
};

Pagination.propTypes = {
    onClick: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    currentPaginationPage: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
};