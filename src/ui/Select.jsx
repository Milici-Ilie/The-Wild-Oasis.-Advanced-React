/* eslint-disable */
import styled from "styled-components";
//🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

//🧙‍♂️🧙‍♂️[SORTING THE CABINS]🧙‍♂️🧙‍♂️ now we must implement this "Select" function in the "SortBy" file
function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...value}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
