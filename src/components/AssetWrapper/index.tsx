import React, { useState } from 'react';
import { TAsset } from '../../constants/data';
import AssetName from '../AssetList/AssetName';
import List from '../List';

import { Container, EditIcon, IconHover, TitleContainer } from './styles';

const AssetWrapper: React.FC<TAsset> = ({ active, name, tags, id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(active);

  return (
    <Container>
      <TitleContainer>
        <AssetName onClick={() => setIsOpen(!isOpen)}>{name}</AssetName>
        <IconHover>
          <EditIcon />
        </IconHover>
      </TitleContainer>

      {isOpen && <List tags={tags} assetID={id} />}
    </Container>
  );
};

export default AssetWrapper;
