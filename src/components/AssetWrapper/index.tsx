import React, { useState } from 'react';
import { TAsset } from '../../constants/data';
import { useAssets } from '../../contexts/assets';
import { useEditingID } from '../../contexts/editingID';
import { useEditingState } from '../../contexts/editingState';
import AssetName from '../AssetList/AssetName';
import List from '../List';

import { Container, EditIcon, IconHover, TitleContainer } from './styles';

const AssetWrapper: React.FC<TAsset> = ({ active, name, tags, id }) => {
  const { setEditingID } = useEditingID()
  const { editingState, setEditingState } = useEditingState();
  const [isOpen, setIsOpen] = useState<boolean>(active);
  const { assets } = useAssets();

  function handleEditClick(assetID: number) {
    const database = [...assets];
    const assetTarget = database.filter(asset => asset.id === assetID);
    setEditingState(!editingState);
    setEditingID(assetID)
    console.log(assetTarget);
  }

  return (
    <Container>
      <TitleContainer>
        <AssetName onClick={() => setIsOpen(!isOpen)}>{name}</AssetName>
        <IconHover onClick={() => handleEditClick(id)}>
          <EditIcon />
        </IconHover>
      </TitleContainer>

      {isOpen && <List tags={tags} assetID={id} />}
    </Container>
  );
};

export default AssetWrapper;
