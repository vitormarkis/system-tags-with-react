import React from 'react';
import AssetsProvider from '../../contexts/assets';
import AssetInput from '../AssetInput';
import Assets from '../Assets';

import { Container } from './styles';

const TagSystem: React.FC = () => {
  return (
    <Container>
      <AssetsProvider>
        <AssetInput />

        <Assets />
        </AssetsProvider>
    </Container>
  );
};

export default TagSystem;
