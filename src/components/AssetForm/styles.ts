import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  * {
    display: block;
  }

  label {
    margin-bottom: 4px;
    margin-left: 12px;
  }

  input {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border-radius: 12px;
    background-color: #444;
    border: 1px solid #3d3d3d;
    outline: none;

    ::placeholder {
      color: white;
    }
  }
  padding-inline: 12px;
`;

export const Input = styled.input``;

export const Label = styled.label``;

export const SubmitButton = styled.button`
  width: 100%;
  padding-block: 12px;
  border-radius: 12px;
  background-color: #3c7;
  border: none;
`;
