import styled from "styled-components";

export const Container = styled.div`
display: flex;
max-width: 1000px;
width: 99%;
margin: 20px auto;
justify-content: space-around;
margin-bottom: 30px;


@media (max-width: 750px) {
  margin-left: auto;
  width: 99%
}
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: black;
  border-radius: 20px;
  padding: 10px;
  width: 22%;
  box-shadow: 0px 0px 3px #CCC;

  span {
    font-size: 15pt;
  }

  @media (max-width: 750px) {
    width:20%;

    p {
      font-size: 15px;
    }

    span {
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

export const Header = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-around;
 width: 100%;
 gap: 10px;
 margin: 10px auto;

svg{
  width: 20px;
  height: 25px;
  color: ${(props) => props.color}
 }
`;

export const HeaderTitle = styled.p`
 font-size: 16px;
`;

export const Total = styled.span`
 font-size: 25px;
 font-weight: bold;
`;
