import React from 'react';
import { TTags } from '../AssetList';

interface ITag extends Pick<TTags, 'color'> {
  children: string;
}

import { Container, Span } from './styles';

const Tag: React.FC<ITag> = ({ children, color }) => {
  return (
    <Container color={color}>
      <Span>{children}</Span>
    </Container>
  );
};

export default Tag;
