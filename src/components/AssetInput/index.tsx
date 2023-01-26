import React from 'react';
import AssetForm from '../AssetForm';
import SectionName from '../SectionName';

import { Container, GradientLunar, Sticky } from './styles';

const AssetInput: React.FC = () => {
  return (
    <Container>
      <GradientLunar />
      <Sticky>
        <SectionName>
          <p>
            Insira um <strong>novo asset</strong>
          </p>
        </SectionName>
        <AssetForm />
      </Sticky>
    </Container>
  );
};

export default AssetInput;
