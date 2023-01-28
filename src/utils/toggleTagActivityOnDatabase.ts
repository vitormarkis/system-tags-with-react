import { TAsset } from '../constants/data';

export function toggleTagActivityOnDatabase(
  database: TAsset[],
  assetID: number,
  state?: boolean
): TAsset[] {
  // console.log('IN', database)
  const toggledActive = database.map(asset => {
    const copy = {...asset}
    if (copy.id === assetID) {
      // console.log(copy)
      copy.active = state ?? !copy.active;
    }
    return copy;
  });
  // console.log('OUT', toggledActive)
  return toggledActive
}
