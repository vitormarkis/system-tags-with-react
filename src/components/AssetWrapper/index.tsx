import React, { useState } from 'react';
import { TTag } from '../../constants/data';
import AssetName from '../AssetList/AssetName';
import List from '../List';

import { Container } from './styles';

interface AssetWrapperProps {
    name: string;
  active: boolean;
  tags: TTag[]
}

const AssetWrapper: React.FC<AssetWrapperProps> = ({ active, name, tags }) => {
  const [isOpen, setIsOpen] = useState<boolean>(active);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <AssetName>{name}</AssetName>

      {isOpen && <List tags={tags} />}
    </Container>
  );
};

export default AssetWrapper;
