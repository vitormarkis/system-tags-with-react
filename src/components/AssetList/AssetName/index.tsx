import React from 'react';

import { Container, Text } from './styles';

const AssetName: React.FC<{ children: string; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <Text>{children}</Text>
    </Container>
  );
};

export default AssetName;
