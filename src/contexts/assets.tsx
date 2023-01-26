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
import { matchColors } from '../utils/matchColor';

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

  useEffect(() => {
    console.log('ATUALIZANDO: ', assets);
  }, [assets]);

  return (
    <AssetsContext.Provider value={{ assets, setAssets }}>
      {children}
    </AssetsContext.Provider>
  );
}

export const useAssets = () => useContext(AssetsContext);
