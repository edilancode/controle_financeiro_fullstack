import styled from "styled-components";

export const Tr = styled.tr`  
  
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  border-bottom: inset;
  
  @media(max-width: 750px) {
    font-size: 13px;

    p {
      font-size: 10pt;
    }
  }
  
  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-left: 5px;

    @media(max-width: 750px) {
      margin-left: 10px;
    }
  }
`;