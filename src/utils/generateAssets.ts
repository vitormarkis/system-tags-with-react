import { TAsset, TTag } from "../constants/data";
import { randomAssetNames, randomImportance, randomTagNames } from "../constants/seed";
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

export const generateAssets: GenerateAssets = (assets, assetsQuantity, tagsQuantityArray) => {
  const [tagsMin, tagsMax] = tagsQuantityArray;
  if (tagsMax > randomTagNames.length) {
    console.error(
      `Foi impresso uma quantidade menor de tags do que a requerida porque faltam nomes únicos no array de tag names. \r\n O número total de tag names atualmente são ${randomTagNames.length} e você requeriu ${tagsMax}.`
    );
  }

  let lastID = getLastAssetID(assets);
  let newAssets: [] | TAsset[] = [];
  let assetNamesArray = [...randomAssetNames];

  for (let i = 0; i < assetsQuantity; i++) {
    const tagsQuantity = random(tagsMin, tagsMax);
    let tagNamesArray = [...randomTagNames];
    let newTags: [] | TTag[] = [];

    for (let i = 0; i < tagsQuantity; i++) {
      if (tagNamesArray.length === 0) {
        break;
      }
      const randomTagIndex = getRandomIndex(tagNamesArray);
      const tagName = tagNamesArray[randomTagIndex];
      tagNamesArray = tagNamesArray.filter((name) => name !== tagName);

      const randomImportanceIndex = getRandomIndex(randomImportance);
      const importance = randomImportance[randomImportanceIndex];

      newTags = [
        ...newTags,
        {
          id: i,
          importance,
          name: tagName,
        } as TTag,
      ];
    }

    if (assetNamesArray.length === 0) {
      throw new Error(
        `Não existe nomes únicos o suficiente para a quantidade de assets requeridos. Tente adicionar mais elementos ao array de names. \r\n \r\n O número total de names são ${randomAssetNames.length}`
      );
    }
    const randomNameIndex = getRandomIndex(assetNamesArray);
    const assetName = assetNamesArray[randomNameIndex];
    assetNamesArray = assetNamesArray.filter((name) => name !== assetName);
    // console.log(i, {
    //   assetName,
    //   assetNamesArray,
    // });

    newAssets = [
      ...newAssets,
      {
        active: true,
        id: 1 + lastID,
        name: assetName,
        tags: newTags,
      },
    ];
    lastID = lastID + 1;
  }
  return newAssets;
};
