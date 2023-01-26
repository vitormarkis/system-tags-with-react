import { TAsset } from '../constants/data';

export function getTargetAsset(
  assetsArgument: TAsset[],
  assetID: number
): TAsset | undefined {
  const targetAsset = assetsArgument.find(asset => asset.id === assetID);
  if (!targetAsset)
    throw new Error('Não foi possível encontrar o asset com ID informado');
  return targetAsset;
}

export function excludeTag(targetAsset: TAsset, tagID: number) {
    return targetAsset.tags.filter(tag => tag.id !== tagID);
}