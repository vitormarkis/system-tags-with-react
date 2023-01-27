import React from 'react';
import { useAssets } from '../../contexts/assets';
import { useFilteredAssets } from '../../contexts/filteredAssets';
import { useSearchValue } from '../../contexts/inputValue';

import { Container, Input, MagnifyingIcon } from './styles';

const SearchBar: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const { assets, setAssets } = useAssets();
  const { setFilteredAssets } = useFilteredAssets();
  const { setSearchValue } = useSearchValue()

  function handleSearchTags(e: any) {
    const search_value = e.target.value;
    setSearchValue(search_value)
    const filtered_assets = assets.filter(asset => {
      const tagNames = asset.tags.map(tag => tag.name);
      const tag_names_contains_search_value = tagNames.some(name =>
        name.includes(search_value)
      );
      // console.log(tag_names_contains_search_value);
      if (tag_names_contains_search_value) return asset;
    });
    const final_assets = search_value.length > 0 ? filtered_assets : [];

    // console.log('filtered_assets', filtered_assets);
    setFilteredAssets(final_assets);
  }

  return (
    <Container>
      <MagnifyingIcon />
      <Input onChange={handleSearchTags} placeholder={placeholder} />
    </Container>
  );
};

export default SearchBar;
