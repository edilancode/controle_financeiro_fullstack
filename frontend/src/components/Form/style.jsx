import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  width: 99%;
  margin: 20px auto;
  padding: 15px 0px;
  justify-content: space-around;
  background-color: #192734;
  color: #a7aaad;
  border-radius: 6px;
  gap: 10px;

  @media (max-width: 950px) {
    display: grid;
    margin-left: auto;
    width: 85%;
  }
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
  background: #16202B;
  color: #8c8f94;
  border: 1px solid #3c434a;
  
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
      margin-right: -10px;
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
   opacity: 0;
  }

  input[type='radio'] + label:before{
    content: '';
    display: inline-flex;;
    width: 8px;
    height: 8px;
    border: 1px solid #8c8f94;
    border-radius: 50%;
    margin-right: 8px;
  }

  input[type="radio"]:checked + label:before{
    background-color: #8c8f94;
    border: 1px solid #8c8f94;
    
  }
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  color: #a7aaad;
  background: linear-gradient( to bottom, #01263a, #00131c);
  
  @media (max-width: 950px) {
    margin-top:-30px;
  }
`;