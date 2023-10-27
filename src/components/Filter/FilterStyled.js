import styled from '@emotion/styled';

const Wrapper = styled.div` 
display: flex;
flex-direction: column;
margin-right: auto;
margin-left: auto;
`;

const Label = styled.label`
  display: flex;
  max-width: 500px;
  padding-left: 15px;
  gap: 5px;
  flex-direction: column;
  margin-top: 25px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 40%;
  border: 1px solid #000;
  padding: 7px 5px 3px 5px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;


  transition: 0.3s;

  &:focus-within {
box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);
`;

export {
  Wrapper,
  Label,
  Input
}
