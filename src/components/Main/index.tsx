import React from 'react';
import TagSystem from '../TagSystem';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <TagSystem />
      </Content>
    </Container>
  );
}

export default Main;