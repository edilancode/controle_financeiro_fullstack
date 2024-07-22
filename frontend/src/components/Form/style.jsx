import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  width: 99%;
  margin: 20px auto;
  padding: 15px 0px;
  justify-content: space-around;
  background-color: #fff;
  
  border-radius: 6px;
  box-shadow: 0px 0px 3px #CCC;
  gap: 10px;

  @media (max-width: 950px) {
    display: grid;
    margin-left: auto;
    width: 85%;
  }
`;

export const Title = styled.h3`
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 4px 10px;
  font-size: 15px;
  outline: none;
  border-radius: 6px;
  background: #fff;
  color: #8c8f94;
  border: 1px solid #CCC;
  
  
  @media (max-width: 950px) {
    margin-left: 20px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  margin-left: -20px;
  flex-direction: column;
  
  input {
    display: inline-flex;
    margin-right: 60px;
    margin-top: 7px;
    margin-bottom: -8px;
    cursor: pointer;
    
    @media (max-width: 950px) {
      margin-right: 6px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }

  label {
    margin-left: 30px;
    margin-top: -10px;
    margin-bottom: 5px;
    cursor: pointer;

    @media (max-width: 950px) {
      margin-left: 0px;
      margin-top: 5px;
    }
  }

  @media (max-width: 950px) {
    flex-direction: row;
    margin-left: 20px;
    margin-right: 5px;
    justify-content: end;
  }

  input[type='radio']{
   accent-color: black;
  }
  `;

export const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  background: teal;
  border: none;
  
  @media (max-width: 950px) {
    margin-top:-30px;
  }
`;