import React from 'react';
import { useAssets } from '../../contexts/assets';

import { Container, Input, MagnifyingIcon } from './styles';

const SearchBar: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const { assets, setAssets } = useAssets();

  function handleSearchTags(e: any) {
    const search_value = e.target.value;
    const filteredAssets = assets.filter(asset => {
      const tagNames = asset.tags.map(tag => tag.name);
      const tag_names_contains_search_value = tagNames.some(name => name.includes(search_value));
      if (tag_names_contains_search_value) return asset;
    });
    console.log(filteredAssets);
  }

  return (
    <Container>
      <MagnifyingIcon />
      <Input onChange={handleSearchTags} placeholder={placeholder} />
    </Container>
  );
};

export default SearchBar;
