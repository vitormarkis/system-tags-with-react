import React, { useEffect, useState } from "react";
import { TAsset } from "../../constants/data";
import { useAssets } from "../../contexts/assets";
import { useEditingID } from "../../contexts/editingID";
import { useEditingState } from "../../contexts/editingState";
import { useSearchValue } from "../../contexts/searchValue";
import { toggleTagActivityOnDatabase as toggleTagActiveOnDB } from "../../utils/toggleTagActivityOnDatabase";
import AssetName from "../AssetList/AssetName";
import List from "../List";

import { AddIcon, Container, DeleteIcon, EditIcon, IconHover, IconsWrapper, TitleContainer } from "./styles";

const AssetWrapper: React.FC<TAsset> = ({ active, name, tags, id: assetID }) => {
  // console.log(name, active)
  const { assets, setAssets } = useAssets();
  const { editingID, setEditingID } = useEditingID();
  const { editingState, setEditingState } = useEditingState();
  const [isTagsVisible, setIsTagsVisible] = useState<boolean>(active);
  const { searchValue } = useSearchValue();
  // if (assetID === 2) {
  //   console.log("isTagsVisible", isTagsVisible);
  // }

  useEffect(() => {
      setIsTagsVisible(active);
  }, [searchValue, active]);

  function handleDeleteClick(assetID: number) {
    // console.log('editingState', editingState)
    // console.log('editingID', editingID)
    if (editingState && editingID === assetID) {
      setEditingID(null);
      setEditingState(false);
    }
    const database = [...assets];
    console.log("database", database);
    const assetsWithoutExludedOne = database.filter((asset) => asset.id !== assetID);
    setAssets(assetsWithoutExludedOne);
  }

  function handleEditClick(assetID: number) {
    const database = [...assets];
    setEditingState(true);
    setIsTagsVisible(true);
    const assetsWithTagsToggled = toggleTagActiveOnDB(database, assetID, true);
    setAssets(assetsWithTagsToggled);
    setEditingID(assetID);
  }

  function handleToggleTags(assetID: number) {
    setIsTagsVisible(!isTagsVisible);
    if (searchValue.length > 0) return;
    const database = [...assets];
    const assetsWithTagsToggled = toggleTagActiveOnDB(database, assetID);
    setAssets(assetsWithTagsToggled);
  }

  return (
    <Container>
      <TitleContainer>
        <AssetName onClick={() => handleToggleTags(assetID)}>{name}</AssetName>
        <IconsWrapper>
          <IconHover className="add-tag" onClick={() => console.log("Adicionando novas tags no " + assetID)}>
            <AddIcon title="Adicionar tags" />
          </IconHover>
          <IconHover onClick={() => handleEditClick(assetID)}>
            <EditIcon title="Editar asset" />
          </IconHover>
          <IconHover className="delete-tag" onClick={() => handleDeleteClick(assetID)}>
            <DeleteIcon title="Excluir asset" />
          </IconHover>
        </IconsWrapper>
      </TitleContainer>

      {isTagsVisible && <List tags={tags} assetID={assetID} />}
    </Container>
  );
};

export default AssetWrapper;
