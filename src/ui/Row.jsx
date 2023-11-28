import styled, { css } from "styled-components";

//🎨🎨[STYLED COMPONENTS]🎨🎨How to create reusable variable by using PROPS and type-name

const Row = styled.div`
  /* display: flex; */
  display: ${(props) => (props.type ? "flex" : "initial")};

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
