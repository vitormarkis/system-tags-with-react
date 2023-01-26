import React from 'react';
import SearchBar from '../SearchBar';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container >
      <Content>
      <SearchBar placeholder="Procure tags por aqui..." />
      </Content>
    </Container>
  );
}

export default Header;