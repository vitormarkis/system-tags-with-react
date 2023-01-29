import { TAsset, TTag } from "../constants/data";
import {
  generateRandomNumberBetween as random,
  getRandomIndex,
} from "./generateRandomNumberBetween";
import { getLastAssetID } from "./getLastTagID";

type GenerateAssets = (
  assets: TAsset[],
  assetsQuantity: number,
  tagsQuantity: [number, number]
) => TAsset[];

export const randomAssetNames = [
  "system-tags-with-react",
  "cloning-nextjs-hotel",
  "first-project-using-tailwind",
  "recreating-nubank-interface",
];

export const randomTagNames = [
  "framer-motion",
  "find() method",
  "some() method",
  "every() method",
  "useContext()",
  "Next.JS",
];

export const randomImportance = ["crucial", "basic", "important"];

export const generateAssets: GenerateAssets = (assets, assetsQuantity, tagsQuantityArray) => {
  const [tagsMin, tagsMax] = tagsQuantityArray;

//   let lastID = getLastAssetID(assets);
let lastID = 2;
  let newAssets: [] | TAsset[] = [];

  for (let i = 0; i < assetsQuantity; i++) {
    const tagsQuantity = random(tagsMin, tagsMax);
    let newTags: [] | TTag[] = [];

    for (let i = 0; i < tagsQuantity; i++) {
      const randomImportanceIndex = getRandomIndex(randomImportance);
      const randomTagNameIndex = getRandomIndex(randomTagNames);
      newTags = [
        ...newTags,
        {
          id: i,
          importance: randomImportance[randomImportanceIndex],
          name: randomTagNames[randomTagNameIndex],
        } as TTag,
      ];
    }

    const randomNameIndex = getRandomIndex(randomAssetNames);
    newAssets = [
      ...newAssets,
      {
        active: true,
        id: 1 + lastID,
        name: randomAssetNames[randomNameIndex],
        tags: newTags,
      },
    ];
    lastID = lastID + 1;
  }
  return newAssets;
};
