import React from "react";
import { useAssets } from "../../contexts/assets";
import { useFilteredAssets } from "../../contexts/filteredAssets";
import { useSearchValue } from "../../contexts/searchValue";
import AssetWrapper from "../AssetWrapper";

import { Container } from "./styles";

const AssetList: React.FC = () => {
  const { assets } = useAssets();
  const { filteredAssets } = useFilteredAssets();
  const { searchValue } = useSearchValue();

  const showFiltered = searchValue.length > 0 ? true : false;
  return (
    <Container>
      {showFiltered
        ? filteredAssets.map((asset, idx) => {
            return <AssetWrapper {...asset} key={`${asset.name}-${idx}`} />;
          })
        : assets.map((asset, idx) => {
            return <AssetWrapper {...asset} key={`${asset.name}-${idx}`} />;
          })}
    </Container>
  );
};

export default AssetList;
