import React from 'react';
import { TAsset } from '../AssetList';
import Tag from '../Tag';

import { Container } from './styles';

const List: React.FC<TAsset> = props => {
  return (
    <Container>
      {props.tags.map(tag => (
        <Tag key={tag.name} color={tag.color}>
          {tag.name}
        </Tag>
      ))}
    </Container>
  );
};

export default List;
