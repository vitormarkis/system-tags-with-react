import React from 'react';

import { Container, Text } from './styles';

const AssetName: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default AssetName;
