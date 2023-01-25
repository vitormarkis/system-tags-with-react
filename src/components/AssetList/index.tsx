import React, { useState } from 'react';
import { TAsset } from '../../constants/data';
import List from '../List';
import AssetName from './AssetName';

import { AssetWrapper, Container } from './styles';

const AssetList: React.FC<{ assets: TAsset[] }> = ({ assets }) => {
  return (
    <Container>
      {assets.map((asset, idx) => {
        const [active, setActive] = useState<boolean>(asset.active);

        return (
          <AssetWrapper
            onClick={() => setActive(!active)}
            key={`${asset.name}-${idx}`}
          >
            <AssetName>{asset.name}</AssetName>
            {active && <List {...asset} active={asset.active} />}
          </AssetWrapper>
        );
      })}
    </Container>
  );
};

export default AssetList;
