import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  font-family: 'Poppins', Sans-serif;
  background-color: #00131c;
  aligne-items: center;
 }
`;

export default Global;