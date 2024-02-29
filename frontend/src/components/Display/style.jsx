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
  background-image: linear-gradient(to right, #192734 40%, #043959, #22303c  );
  color: #F2F2F2;
  border-radius: 20px;
  padding: 10px;
  width: 22%;

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
 color: #8c8f94;
`;

export const Total = styled.span`
 font-size: 25px;
 font-weight: bold;
`;
