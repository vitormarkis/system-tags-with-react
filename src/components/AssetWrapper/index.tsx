import React, { useState } from 'react';
import { TAsset } from '../../constants/data';
import { useAssets } from '../../contexts/assets';
import { useEditingID } from '../../contexts/editingID';
import { useEditingState } from '../../contexts/editingState';
import AssetName from '../AssetList/AssetName';
import List from '../List';

import {
  Container,
  DeleteIcon,
  EditIcon,
  IconHover,
  IconsWrapper,
  TitleContainer,
} from './styles';

const AssetWrapper: React.FC<TAsset> = ({ active, name, tags, id }) => {
  const { setAssets } = useAssets();
  const { setEditingID } = useEditingID();
  const { editingState, setEditingState } = useEditingState();
  const [isOpen, setIsOpen] = useState<boolean>(active);
  const { assets } = useAssets();

  function handleEditClick(assetID: number) {
    const database = [...assets];
    const assetTarget = database.filter(asset => asset.id === assetID);
    setEditingState(!editingState);
    setEditingID(assetID);
    console.log(assetTarget);
  }

  function handleDeleteClick(assetID: number) {
    const database = [...assets];
    const assetsWithoutExludedOne = database.filter(
      asset => asset.id !== assetID
    );
    setAssets(assetsWithoutExludedOne);
  }

  return (
    <Container>
      <TitleContainer>
        <AssetName onClick={() => setIsOpen(!isOpen)}>{name}</AssetName>
        <IconsWrapper>
          <IconHover onClick={() => handleEditClick(id)}>
            <EditIcon title="Editar asset" />
          </IconHover>
          <IconHover onClick={() => handleDeleteClick(id)}>
            <DeleteIcon title="Excluir asset" />
          </IconHover>
        </IconsWrapper>
      </TitleContainer>

      {isOpen && <List tags={tags} assetID={id} />}
    </Container>
  );
};

export default AssetWrapper;
