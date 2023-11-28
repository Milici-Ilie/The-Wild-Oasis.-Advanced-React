/* eslint-disable */
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

//🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬
function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams(); // this HOOK will store the value in the URL ==== and the "filterField" will set the value of the <FilterButton for "handleClick("... here...") and the "options" will set the paragraph/text" 🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬
  const currentFilter = searchParams.get(filterField) || options.at(0).value; // here we want to show wich button is slected by using the active class, meaning that we will change the color of the button dependng if he will be active or ot, check down in the <FilterButton.../> the "active" value  🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬

  function handleClick(value) {
    searchParams.set(filterField, value); // so here the first value is the name of the state and the second one is the "value" itself
    if (searchParams.get("page")) searchParams.set("page", 1); //this is set to "1" for the moments when the user is at the last page with less than maximum list items and he wants to change the filter from "All" to "Checked in" or any, so by setting to "1" will solve the problem, check GPT for more info's

    setSearchParams(searchParams);
  } // this function will take the value from the Buttons "All", "No discount" and "With discount". ==== Bellow we added this function iside of <FilterButton/>

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $active={option.value === currentFilter ? "true" : undefined}
          disabled={option.value === currentFilter} //when the button is selected this one will not be clickable again, just a small detail, but a nice one
        >
          {option.label}
        </FilterButton>
      ))}
      {/* <FilterButton onClick={() => handleClick("no-discount")}>
        No discount
      </FilterButton>
      <FilterButton onClick={() => handleClick("with-discount")}>
        With discount
      </FilterButton> */}
    </StyledFilter>
  );
} //🎬🎬[SORT/FILTER DISCOUNT & PRICE]🎬🎬 creating the content for sorting the discount and the price

export default Filter;
