import React, { useEffect, useState } from "react";
import { TAsset } from "../../constants/data";
import { useAppContext } from "../../contexts/appContext";
import { useAssets } from "../../contexts/assets";
import { useEditingID } from "../../contexts/editingID";
import { useSearchValue } from "../../contexts/searchValue";
import { toggleTagActivityOnDatabase as toggleTagActiveOnDB } from "../../utils/toggleTagActivityOnDatabase";
import AssetName from "../AssetList/AssetName";
import List from "../List";

import {
  AddIcon,
  Container,
  DeleteIcon,
  EditIcon,
  IconHover,
  IconsWrapper,
  TitleContainer,
} from "./styles";

const AssetWrapper: React.FC<TAsset> = ({ active, name, tags, id: assetID }) => {
  const { appContext, setAppContext } = useAppContext();
  const { assets, setAssets } = useAssets();
  const { editingID, setEditingID } = useEditingID();
  const [isTagsVisible, setIsTagsVisible] = useState<boolean>(active);
  const { searchValue } = useSearchValue();

  useEffect(() => {
    setIsTagsVisible(active);
  }, [searchValue, active]);

  function handleDeleteClick(assetID: number) {
    if (appContext === "editing_asset" && editingID === assetID) {
      setAppContext(null);
      setEditingID(null);
    }
    const database = [...assets];
    console.log("database", database);
    const assetsWithoutExludedOne = database.filter((asset) => asset.id !== assetID);
    setAssets(assetsWithoutExludedOne);
  }

  function handleEditClick(assetID: number) {
    if (appContext !== null) return;
    setAppContext("editing_asset");
    setEditingID(assetID);
    setIsTagsVisible(true);
    const database = [...assets];
    const assetsWithTagsToggled = toggleTagActiveOnDB(database, assetID, true);
    setAssets(assetsWithTagsToggled);
  }

  function handleToggleTags(assetID: number) {
    setIsTagsVisible(!isTagsVisible);
    if (searchValue.length > 0) return;
    const database = [...assets];
    const assetsWithTagsToggled = toggleTagActiveOnDB(database, assetID);
    setAssets(assetsWithTagsToggled);
  }

  function handleAddNewTags(assetID: number) {
    if (appContext !== null) return;
    setEditingID(assetID)
    console.log("Adicionando mais tags ao asset de ID " + String(assetID));
    setAppContext("adding_tags");
  }

  return (
    <Container>
      <TitleContainer>
        <AssetName onClick={() => handleToggleTags(assetID)}>{name}</AssetName>
        <IconsWrapper>
          <IconHover className="add-tag" onClick={() => handleAddNewTags(assetID)}>
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
