import React from 'react';
import { TTag } from '../../constants/data';

interface ITag extends Pick<TTag, 'color'> {
  children: string;
}

import { CloseIcon, Container, Span, IconWrapper } from './styles';

const Tag: React.FC<ITag> = ({ children, color }) => {
  return (
    <Container color={color}>
      <Span>{children}</Span>
      <IconWrapper>
        <CloseIcon />
      </IconWrapper>
    </Container>
  );
};

export default Tag;
