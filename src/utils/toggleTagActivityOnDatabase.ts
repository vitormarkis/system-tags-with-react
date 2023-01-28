import { TAsset } from "../constants/data";

export function toggleTagActivityOnDatabase(
  database: TAsset[],
  assetID: number,
  state?: boolean
): TAsset[] {
  const toggledActive = database.map((original_asset) => {
    const asset = { ...original_asset };
    if (asset.id === assetID) {
      asset.active = state !== undefined ? state : !asset.active;
    }
    return asset;
  });
  return toggledActive;
}
