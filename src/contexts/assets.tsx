import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { TAsset, theAssets } from '../constants/data';

interface AssetsProviderProps {
  assets: TAsset[] | [];
  setAssets: Dispatch<SetStateAction<TAsset[]>>;
}

export const AssetsContext = createContext<AssetsProviderProps>({
  assets: theAssets,
  setAssets: () => {},
});

export default function AssetsProvider({ children }: { children: ReactNode }) {
  const [assets, setAssets] = useState<TAsset[]>([]);

  return (
    <AssetsContext.Provider value={{ assets, setAssets }}>
      {children}
    </AssetsContext.Provider>
  );
}

export const useAssets = () => useContext(AssetsContext);
