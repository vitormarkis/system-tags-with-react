import { TAsset } from "../constants/data";

export default function filterAssets(assets: TAsset[], search_value: string): TAsset[] {
  const copied = [...assets];
  return copied.filter((asset) => {
    const tagNames = asset.tags.map((tag) => tag.name);
    const tag_names_contains_search_value = tagNames.some((name) => name.includes(search_value));
    if (tag_names_contains_search_value) return {...asset};
  });
}
