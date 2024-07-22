import styled from "styled-components";

export const Table = styled.table`
  max-width: 1000px;
  width: 99%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;;
  border-radius: 6px;
  box-shadow: 0px 0px 3px #CCC;
  display: block;
  overflow: auto;
  height: 320px;
  overflow: scroll-y;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #192734;
  }

  &::-webkit-scrollbar-thumb {
    background: #3c434a;
    border: 1px solid #043959;
    border-radius: 15px;
  }
  
  @media (max-width: 950px) {
    margin: auto;
    height: 225px;
    width: 85%;
  }
`
export const Thead = styled.thead`
  display: inline-box;
`;

export const Tbody = styled.tbody`
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`
