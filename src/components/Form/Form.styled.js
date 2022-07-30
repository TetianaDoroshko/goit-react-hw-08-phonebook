import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 350px;
  padding: 10px;
  border: 1px solid black;
  align-items: flex-start;
  font-size: 18px;
`;

export const Input = styled.input`
  display: block;
  margin: 5px 0 15px;
  padding: 3px;
  border: 1px solid #bababa;
  outline: none;

  &:focus {
    box-shadow: 0 0 3px 3px cornflowerblue;
  }
`;

export const Button = styled.button`
  margin-left: ${props => (props.type === 'button' ? '10px' : 0)};
  padding: 2px 5px;
  border-radius: 5px;
  border: 1px solid #bababa;
  background-color: #fff;

  &:active {
    background-color: cornflowerblue;
  }
`;
