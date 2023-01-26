import React from 'react';
import { TAsset } from '../../constants/data';
import AssetWrapper from '../AssetWrapper';

import { Container } from './styles';

const AssetList: React.FC<{ assets: TAsset[] }> = ({ assets }) => {
  return (
    <Container>
      {assets.map((asset, idx) => {
        return (
          <AssetWrapper tags={asset.tags} name={asset.name} key={`${asset.name}-${idx}`} active={asset.active} />
        );
      })}
    </Container>
  );
};

export default AssetList;
