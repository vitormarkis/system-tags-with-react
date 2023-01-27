import React from 'react';
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
          <AssetInput />

          <Assets />
        </EditingStateProvider>
      </EditingIDProvider>
    </Container>
  );
};

export default TagSystem;
