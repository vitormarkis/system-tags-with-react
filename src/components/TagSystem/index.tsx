import React from 'react';
import AssetInput from '../AssetInput';
import Assets from '../Assets';

import { Container } from './styles';

const TagSystem: React.FC = () => {
  return (
    <Container>
        <AssetInput />

        <Assets />
    </Container>
  );
};

export default TagSystem;
