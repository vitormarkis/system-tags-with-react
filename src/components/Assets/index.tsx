import React from "react";
import { useAppContext } from "../../contexts/appContext";
import AssetList from "../AssetList";
import SectionName from "../SectionName";

import {
  Container,
  IconHover,
  IconsContainer,
  NewAssetIcon,
  SortIcon,
  TitleContainer,
  GradientLunar,
  GradientSpacial
} from "./styles";

const Assets: React.FC = () => {
  const { appContext, setAppContext } = useAppContext();

  function handleNewAsset() {
    if (appContext !== null) return;
    console.log('Adicionando nova tag')
    setAppContext("adding_asset");
  }

  function handleSortTags() {
    console.log("Organizando as tags");
  }

  return (
    <Container>
          <GradientLunar />
          <GradientSpacial />
      <TitleContainer>
        <SectionName>
          <p>
            Lista de <strong>Assets</strong>
          </p>
        </SectionName>
        <IconsContainer>
          <IconHover onClick={handleNewAsset} className="new-asset" title="Adicionar um novo asset">
            <NewAssetIcon />
          </IconHover>
          <IconHover onClick={handleSortTags} className="sort-asset" title="Ordenar tags">
            <SortIcon />
          </IconHover>
        </IconsContainer>
      </TitleContainer>
      <AssetList />
    </Container>
  );
};

export default Assets;
