import React from 'react';
import AssetList from '../AssetList';
import SectionName from '../SectionName';

import {
  Container,
  IconHover,
  IconsContainer,
  NewAssetIcon,
  SortIcon,
  TitleContainer,
} from './styles';

const Assets: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <SectionName>
          <p>
            Lista de <strong>Assets</strong>
          </p>
        </SectionName>
        <IconsContainer>
          <IconHover className="new-asset" title='Adicionar um novo asset'>
            <NewAssetIcon />
          </IconHover>
          <IconHover className="sort-asset" title='Ordenar tags'>
            <SortIcon />
          </IconHover>
        </IconsContainer>
      </TitleContainer>
      <AssetList />
    </Container>
  );
};

export default Assets;
