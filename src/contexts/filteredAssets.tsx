import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { TAsset } from '../constants/data';

interface FilteredAssetsContextProviderProps {
  filteredAssets: TAsset[];
  setFilteredAssets: Dispatch<SetStateAction<TAsset[]>>;
}

export const FilteredAssetsContext =
  createContext<FilteredAssetsContextProviderProps>({
    filteredAssets: [],
    setFilteredAssets: () => {},
  });

export default function FilteredAssetsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filteredAssets, setFilteredAssets] = useState<TAsset[]>([]);

  return (
    <FilteredAssetsContext.Provider
      value={{ filteredAssets, setFilteredAssets }}
    >
      {children}
    </FilteredAssetsContext.Provider>
  );
}

export const useFilteredAssets = () => useContext(FilteredAssetsContext);
