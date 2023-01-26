import React from 'react';
import { TTag } from '../../constants/data';
import Tag from '../Tag';

import { Container } from './styles';

interface ListProps {
  tags: TTag[];
}

const List: React.FC<ListProps> = ({ tags }) => {
  if (!tags) return <></>;
  return (
    <Container>
      {tags.map(tag => (
        <Tag key={tag.name} color={tag.color}>
          {tag.name}
        </Tag>
      ))}
    </Container>
  );
};

export default List;
