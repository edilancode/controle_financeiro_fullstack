import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  font-family: 'Poppins', Sans-serif;
  background-color: #f2f2f2;
  aligne-items: center;
 }
`;

export default Global;