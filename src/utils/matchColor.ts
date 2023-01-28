import { importance_colors } from '../constants/colors';
import { TAsset, TTag } from '../constants/data';

export function matchColors(assetObjectWithoutColor: TAsset): TAsset {
  // console.log('Entrou na função de adicionar cor...')
  const tagsWithColor: TTag[] = assetObjectWithoutColor.tags.map(tag => {
    const getColorObject = importance_colors.filter(
      obj => obj.importance === tag.importance
    );
    const { color } = getColorObject[0];
    // console.log('As propriedades da tag são ', tag)
    return {
      ...tag,
      color,
    };
  });
  assetObjectWithoutColor.tags = tagsWithColor
  
  return assetObjectWithoutColor;
}

export function addColorProperty(tagWithoutColor: TTag): TTag {
  const getColorObject = importance_colors.filter(
    obj => obj.importance === tagWithoutColor.importance
  );
  const { color } = getColorObject[0];
  return {
    ...tagWithoutColor,
    color
  }
}
