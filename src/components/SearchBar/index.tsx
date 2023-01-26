import React from 'react';

import { Container, Input, MagnifyingIcon } from './styles';

const SearchBar: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <Container>
      <MagnifyingIcon />
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default SearchBar;
