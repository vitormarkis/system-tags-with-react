import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  * {
    display: block;
  }

  label {
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    margin-bottom: 12px;
    padding: 9px 12px;
    border-radius: 12px;
    background-color: #444;
    border: 1px solid #3d3d3d;
    outline: none;

    ::placeholder {
      color: #aaa;
      font-size: 12px;
    }
  }
`;

export const Input = styled.input``;

export const Label = styled.label`
  color: #74888f;
  font-size: 14px;
  font-weight: 400;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding-block: 12px;
  border-radius: 12px;
  background-color: #fb0;
  color: #000;
  border: none;
  /* background-color: #fb0; */
`;
