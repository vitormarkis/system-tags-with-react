import { importance_colors } from '../constants/colors';
import { TAsset, TTag } from '../constants/data';

export function matchColors(assetObjectWithoutColor: TAsset): TAsset {
  const tagsWithColor: TTag[] = assetObjectWithoutColor.tags.map(asset => {
    const getColorObject = importance_colors.filter(
      obj => obj.importance === asset.importance
    );
    const { color } = getColorObject[0];
    return {
      ...asset,
      color,
    };
  });
  assetObjectWithoutColor.tags = tagsWithColor
  
  return assetObjectWithoutColor;
}
