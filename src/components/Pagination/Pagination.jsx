import React from 'react';
import PropTypes from "prop-types";
import { usePagination, dotsBefore,  dotsAfter} from "components/Pagination/usePagination";
import { IoIosArrowRoundBack, IoIosMore, IoIosArrowRoundForward, } from "react-icons/io";
import { Container, Item, Number, Dots, Arrow } from "components/Pagination/Pagination.styled";

export const Pagination = ({currentPage, totalPageCount, onPageChange}) => {

    const paginationRange = usePagination({currentPage, totalPageCount});

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <Container >
            {currentPage !== 1 &&
                <Arrow onClick={onPrevious}>
                    <IoIosArrowRoundBack size={20}/>
                </Arrow>}
            
            {paginationRange.map(pageNumber => {
                return (
                    <Item key={pageNumber}>
                        {pageNumber === dotsBefore || pageNumber === dotsAfter
                            ? <Dots><IoIosMore /></Dots>
                            : <Number
                                current={pageNumber === currentPage}
                                onClick={() => onPageChange(pageNumber)}>
                                {pageNumber}
                            </Number>
                        }
                    </Item>
                );
            })}
            {currentPage !== lastPage &&
                <Arrow onClick={onNext}>
                    <IoIosArrowRoundForward size={20} />
                </Arrow>}
        </Container>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};