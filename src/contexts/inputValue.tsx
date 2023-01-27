import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface SearchValueProviderProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchValueContext = createContext<SearchValueProviderProps>({
  searchValue: '',
  setSearchValue: () => {},
});

export default function SearchValueProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => console.log(searchValue), [searchValue])
  
  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
}

export const useSearchValue = () => useContext(SearchValueContext);
