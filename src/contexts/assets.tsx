import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TAsset, theAssets } from '../constants/data';
import { generateAssets } from '../utils/generateAssets';
import { matchColors } from '../utils/matchColor';
import { useFilteredAssets } from './filteredAssets';

interface AssetsProviderProps {
  assets: TAsset[] | [];
  setAssets: Dispatch<SetStateAction<TAsset[]>>;
}

export const AssetsContext = createContext<AssetsProviderProps>({
  assets: theAssets,
  setAssets: () => {},
});

export default function AssetsProvider({ children }: { children: ReactNode }) {
  const coloredAssets = theAssets.map(asset => {
    return matchColors(asset);
  });

  const [assets, setAssets] = useState<TAsset[]>(coloredAssets);
  // useEffect(() => {
  //   const newAssets = generateAssets(assets, 10, [3,14])
  //   const newAssetsColorized = newAssets.map(asset => matchColors(asset))
  //   setAssets(prevState => [...prevState, ...newAssetsColorized])
  // }, [])

  return (
    <AssetsContext.Provider value={{ assets, setAssets }}>
      {children}
    </AssetsContext.Provider>
  );
}

export const useAssets = () => useContext(AssetsContext);
