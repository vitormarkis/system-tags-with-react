import { TAsset } from "../constants/data";

export function getLastTagID(asset: TAsset): number {
  if (asset.tags.length === 0) return 0;
  const getAllTagIDs = asset.tags.map((tag) => tag.id);
  return Math.max(...getAllTagIDs);
}

export function getLastTagIDFromID(editingID: number, assets: TAsset[]): number {
  const database = [...assets];
  const target = database.filter((asset) => asset.id === editingID)[0];
  const target_idx = database.indexOf(target);
  const asset = database[target_idx];

  if (asset.tags.length === 0) return 0;
  const getAllTagIDs = asset.tags.map((tag) => tag.id);
  return Math.max(...getAllTagIDs);
}

export function getLastAssetID(assets: TAsset[]): number {
  if (assets.length === 0) return 0;
  const getAllAssetsIDs = assets.map((asset) => asset.id);
  return Math.max(...getAllAssetsIDs);
}
