import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  * {
    display: block;
  }

  label {
    margin-bottom: 4px;
  }

  input, select {
    width: 100%;
    margin-bottom: 12px;
    padding: 9px 12px;
    border-radius: 12px;
    background-color: #444;
    border: 1px solid #3d3d3d;
    outline: none;

    ::placeholder {
      color: #aaa;
  font-size: 0.75rem;
    }
  }
`;

export const Input = styled.input``;

export const Label = styled.label`
  color: #fff;
  font-size: 0.75rem;
  font-weight: 300;
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


