import React from 'react';
import { TAsset } from '../../constants/data';
import { useAssets } from '../../contexts/assets';

interface TagProps {
  id: number;
  children: string;
  color: string;
  assetID: number;
}

import { CloseIcon, Container, IconWrapper, Span } from './styles';

const Tag: React.FC<TagProps> = ({ id, children, color, assetID }) => {
  const { assets, setAssets } = useAssets();

  function excludeTagID(assetsArgument: TAsset[], tagID: number, assetID:number): TAsset[] {
    const targetAsset = assetsArgument.find(asset => (
      asset.id === assetID
    ))
    if(!targetAsset) throw new Error('Não foi possível encontrar o asset com ID informado')
    const idx = assetsArgument.indexOf(targetAsset)
    targetAsset.tags = targetAsset.tags.filter(tag => tag.id !== tagID);
    assetsArgument[idx] = targetAsset
    console.log(assetsArgument)
    return assetsArgument
  }

  function handleDeleteTag(assets: TAsset[], id: number, assetID: number) {
    const AssetsWithTagExcluded = excludeTagID(assets, id, assetID);
    console.log(AssetsWithTagExcluded)
    return setAssets(AssetsWithTagExcluded)
  }

  return (
    <Container color={color}>
      <Span>{children}</Span>
      <IconWrapper onClick={() => handleDeleteTag(assets, id, assetID)}>
        <CloseIcon />
      </IconWrapper>
    </Container>
  );
};

export default Tag;
