import React from 'react';
import { TTag } from '../../constants/data';
import Tag from '../Tag';

import { Container } from './styles';

interface ListProps {
  assetID: number;
  tags: TTag[];
}

const List: React.FC<ListProps> = ({ tags, assetID }) => {
  if (!tags) return <></>;
  return (
    <Container>
      {tags.map((tag, idx) => (
        <Tag
          id={tag.id}
          key={`${tag.name}-${idx}`}
          color={tag.color as string}
          assetID={assetID}
        >
          {tag.name}
        </Tag>
      ))}
    </Container>
  );
};

export default List;
