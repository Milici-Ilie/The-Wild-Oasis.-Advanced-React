import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  line-height:1.4; //this will apply to all the codes from above
`; //🎨🎨[STYLED COMPONENTS]🎨🎨 here we created a variable that will check if the "props" are equal with the name that we give to our contents by using "as='h1'" or any name and will set the coresponding code to it... also check the "App.jsx" to see how to implement this === this "as='h1'" will mutate the HTML and changing to exact conent that we define, for ex "as='h2'" will becom an "h2" content, or if "as='button'" the content will become a button

export default Heading;
