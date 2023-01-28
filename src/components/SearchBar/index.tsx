import React, { useEffect, useRef } from "react";
import { useAssets } from "../../contexts/assets";
import { useFilteredAssets } from "../../contexts/filteredAssets";
import { useSearchValue } from "../../contexts/searchValue";
import filterAssets from "../../utils/filterAssets";
import setAllActives from "../../utils/setAllActives";

import { Container, Input, MagnifyingIcon } from "./styles";

const SearchBar: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const { assets } = useAssets();
  const { setFilteredAssets } = useFilteredAssets();
  const { setSearchValue } = useSearchValue();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearchTags(e: any) {
    const database = assets.slice()
    const search_value:string = e.target.value;
    setSearchValue(search_value)
    if(search_value.length === 0) return
    
    const active_tags_assets = setAllActives(database);
    const filtered_assets = filterAssets(active_tags_assets, search_value)
    
    console.log(filtered_assets)
    setFilteredAssets(filtered_assets);
  }

  useEffect(() => {
    const search_value = inputRef.current?.value;
    if (!search_value) return;
    const database = [...assets]
    const filtered_assets = filterAssets(database, search_value);
    const final_assets = search_value.length > 0 ? filtered_assets : [];

    setFilteredAssets(final_assets);
  }, [assets]);

  return (
    <Container>
      <MagnifyingIcon />
      <Input ref={inputRef} onChange={handleSearchTags} placeholder={placeholder} />
    </Container>
  );
};

export default SearchBar;
