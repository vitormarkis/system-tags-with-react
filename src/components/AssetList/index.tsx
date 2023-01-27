import React from 'react';
import { useAssets } from '../../contexts/assets';
import { useFilteredAssets } from '../../contexts/filteredAssets';
import { useSearchValue } from '../../contexts/inputValue';
import AssetWrapper from '../AssetWrapper';

import { Container } from './styles';

const AssetList: React.FC = () => {
  const { assets: database } = useAssets();
  const { filteredAssets } = useFilteredAssets();
  const { searchValue } = useSearchValue()

  return (
    <Container>
      {(searchValue.length > 0)
        ? filteredAssets.map((asset, idx) => {
            return <AssetWrapper {...asset} key={`${asset.name}-${idx}`} />;
          })
        : database.map((asset, idx) => {
            return <AssetWrapper {...asset} key={`${asset.name}-${idx}`} />;
          })}
    </Container>
  );
};

export default AssetList;
