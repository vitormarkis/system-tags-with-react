import React from 'react';
import AssetsProvider, { useAssets } from '../../contexts/assets';
import AssetList from '../AssetList';
import SectionName from './SectionName';

import { Container } from './styles';

const Assets: React.FC = () => {
  const { assets } = useAssets();

  return (
      <Container>
        <SectionName>
          <p>
            Lista de <strong>Assets</strong>
          </p>
        </SectionName>
        <AssetList assets={assets} />
      </Container>
  );
};

export default Assets;
