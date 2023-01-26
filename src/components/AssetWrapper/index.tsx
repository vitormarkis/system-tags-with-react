import React, { useState } from 'react';
import { TAsset } from '../../constants/data';
import AssetName from '../AssetList/AssetName';
import List from '../List';

import { Container } from './styles';


const AssetWrapper: React.FC<TAsset> = ({ active, name, tags, id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(active);

  return (
    <Container >
      <AssetName onClick={() => setIsOpen(!isOpen)}>{name}</AssetName>

      {isOpen && <List tags={tags} assetID={id} />}
    </Container>
  );
};

export default AssetWrapper;
