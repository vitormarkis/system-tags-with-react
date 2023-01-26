import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  margin-block: 12px;
  border-bottom: 1px solid #00000060;
  border-top: 1px solid #ffffff20;
  box-shadow: 0px .2rem 4px #00000020;
  border-radius: 12px;
  padding: 12px;

  background-color: #29323a;
  
  &:nth-child(even) {
  background-color: #212d36;
  }
`;

