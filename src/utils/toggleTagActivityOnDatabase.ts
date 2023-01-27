import { TAsset } from '../constants/data';

export function toggleTagActivityOnDatabase(
  database: TAsset[],
  assetID: number
): TAsset[] {
  return database.map(asset => {
    if (asset.id === assetID) {
      asset.active = !asset.active;
    }
    return asset;
  });
}
