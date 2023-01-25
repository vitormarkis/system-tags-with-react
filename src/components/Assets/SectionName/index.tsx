import React from 'react';

import { Container, Text } from './styles';

const SectionName: React.FC<{children: React.ReactElement}> = ({children}) => {
  return (
    <Container>
        <Text>{children}</Text>
    </Container>
  );
}

export default SectionName;