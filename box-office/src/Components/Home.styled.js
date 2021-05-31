import styled from 'styled-components';

// Home.styled.js
export const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 300px;
  margin: auto;
  outline: none;
  padding: 11px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    margin: 0 15px;
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom:30px;
  margin-top: 5px;
  
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    margin-bottom: 25px;
    &:hover {
      cursor: pointer;
    }
  }
`;