import React from 'react';
import AssetsProvider from '../../contexts/assets';
import EditingIDProvider from '../../contexts/editingID';
import EditingStateProvider from '../../contexts/editingState';
import AssetInput from '../AssetInput';
import Assets from '../Assets';

import { Container } from './styles';

const TagSystem: React.FC = () => {
  return (
    <Container>
      <EditingIDProvider>
        <EditingStateProvider>
          <AssetsProvider>
            <AssetInput />

            <Assets />
          </AssetsProvider>
        </EditingStateProvider>
      </EditingIDProvider>
    </Container>
  );
};

export default TagSystem;
