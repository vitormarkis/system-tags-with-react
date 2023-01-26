import React from 'react';
import { TAsset } from '../../constants/data';
import { useAssets } from '../../contexts/assets';
import { excludeTag, getTargetAsset } from '../../utils/functionals';

interface TagProps {
  id: number;
  children: string;
  color: string;
  assetID: number;
}

import { CloseIcon, Container, IconWrapper, Span } from './styles';

const Tag: React.FC<TagProps> = ({ id, children, color, assetID }) => {
  const { assets, setAssets } = useAssets();

  function excludeTagID(assets: TAsset[], tagID: number, assetID:number): TAsset[] | undefined {
    const targetAsset = getTargetAsset(assets, assetID)
    if(!targetAsset) return

    const idx = assets.indexOf(targetAsset as TAsset)
    targetAsset.tags = excludeTag(targetAsset, tagID)
    
    const copyOfAssets = [...assets]
    copyOfAssets[idx] = targetAsset
    
    return copyOfAssets
  }

  function handleDeleteTag(assets: TAsset[], id: number, assetID: number) {
    const AssetsWithTagExcluded = excludeTagID(assets, id, assetID);
    if(!AssetsWithTagExcluded) return
    setAssets(AssetsWithTagExcluded)
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
