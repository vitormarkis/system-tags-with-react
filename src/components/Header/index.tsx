import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <SearchBar placeholder="Procure tags por aqui..." />
      </Content>
    </Container>
  );
};

export default Header;
