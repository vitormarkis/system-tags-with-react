import React, { useState } from 'react';
import List from '../List';
import AssetName from './AssetName';

export type TTags = {
  name: string;
  importance: string;
  color: string;
};

export type TAsset = {
  name: string;
  active: boolean;
  tags: TTags[];
};

interface IAssetList {
  assets: TAsset[];
}

import { AssetWrapper, Container } from './styles';

const AssetList: React.FC<IAssetList> = ({ assets }) => {
  return (
    <Container>
      {assets.map((asset, idx) => {
        const [active, setActive] = useState<boolean>(!asset.active);

        return (
          <AssetWrapper onClick={() => setActive(!active)}>
            <AssetName>{asset.name}</AssetName>
            {active && <List key={idx} {...asset} active={asset.active} />}
          </AssetWrapper>
        );
      })}
    </Container>
  );
};

export default AssetList;
