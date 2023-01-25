import React from 'react';
import AssetForm from '../AssetForm';
import SectionName from './SectionName';

import { Container, Sticky } from './styles';

const AssetInput: React.FC = () => {
  return (
    <Container>
      <Sticky>
        <SectionName><p>
          Insira um <strong style={{
            fontWeight: 'bold',
            color: '#fb0'
          }}>novo asset</strong>
        </p></SectionName>
        <AssetForm />
      </Sticky>
    </Container>
  );
};

export default AssetInput;
