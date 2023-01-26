import React from 'react';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return (
    <Container>
        <h1>Asseties</h1>
    </Container>
  );
}

export default Logo;

export const Container = styled.div`
    h1 {
        line-height: 1;
        font-family: 'Baloo 2';
    }
`;
