/* eslint-disable */

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

//📄📄[REUSABLE PAGINATION]📄📄 calculate the previous page and the next page will always depend of the current page, so we want to get that current page from the URL

//📄📄[REUSABLE PAGINATION]📄📄 👇👇👇

function Pagination({ count }) {
  //"count" = number of results/pages
  const [searchParams, setSearchParams] = useSearchParams(); //📄📄[REUSABLE PAGINATION]📄📄from here we are taking the current page

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE); //📄📄[REUSABLE PAGINATION]📄📄this is how we check the number/length of the pages

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1; //📄📄[REUSABLE PAGINATION]📄📄here we check if the page is equal with the last page, if so than the functionality will stop, not adding knewo pages, otherwise will add +1 if the current page is lower than the last page, the Button "previous" wiill still add pages

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1; //📄📄[REUSABLE PAGINATION]📄📄it's the opposite of the "next" variable explanation from above 👆👆

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null; //if the list length fit in only 1 page than dont display the pagination

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </P>
      {/* connecting the pagination with the displayed number */}

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          {/* here we disabled the button if is at the first page, just a nice future */}
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          {/* here we disabled the button if is at the last page, just a nice future */}
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  ); //📄📄[REUSABLE PAGINATION]📄📄 📄📄[REUSABLE PAGINATION]📄📄
}

export default Pagination;
