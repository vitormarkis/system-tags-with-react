import React from 'react';
import AssetForm from '../AssetForm';
import SectionName from './SectionName';

import { Container, Sticky } from './styles';

const AssetInput: React.FC = () => {
  return (
    <Container>
      <Sticky>
        <SectionName>Insira um novo asset</SectionName>
        <AssetForm />
      </Sticky>
    </Container>
  );
};

export default AssetInput;
