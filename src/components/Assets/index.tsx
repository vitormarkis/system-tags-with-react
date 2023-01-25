import React from 'react';
import { theAssets } from '../../constants/data';
import AssetList from '../AssetList';
import SectionName from './SectionName';

import { Container } from './styles';

const Assets: React.FC = () => {
  return (
    <Container>
      <SectionName>
        <p>
          Lista de <strong>Assets</strong>
        </p>
      </SectionName>
      <AssetList assets={theAssets} />
    </Container>
  );
};

export default Assets;
