import { TAsset } from "../constants/data";

export default function setAllActives(database: TAsset[], isActive: boolean = true): TAsset[] {
  return database.map(asset => {
    return {...asset, active: isActive}
  })
}
