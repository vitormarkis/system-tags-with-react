import { TAsset } from '../constants/data';

export function getLastTagID(database: TAsset): number {
  const getAllTagIDs = database.tags.map(tag => {
    if(tag.id === -Infinity) return 0
    return tag.id
  });
  return Math.max(...getAllTagIDs);
}
