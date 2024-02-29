import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  height: 80px;
  font-size: 9pt;
  text-align: center;
  justify-content: space-between;
  background: linear-gradient( to bottom, #01263a, #00131c);
  border-radius: 0 0 15px 15px;
`;

export const Title = styled.h1`
  padding-top: 15px;
  margin-left: 18px;
  color: #F2F2F2;
  
  @media (max-width: 750px) {
    font-size: 20px;
  }
`





