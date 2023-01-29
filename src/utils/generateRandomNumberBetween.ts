import { TAsset } from "../constants/data";

export function generateRandomNumberBetween(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomIndex(arr: string[]): number {
  const assetLength = Object.entries(arr).length;
  const randomIndex = generateRandomNumberBetween(0, assetLength - 1);
  return randomIndex;
}
