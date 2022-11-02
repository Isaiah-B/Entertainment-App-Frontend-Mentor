import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReactComponent as SearchIcon } from '../../assets/icons/icon-search.svg';
import { itemListFilterState, itemListSearch } from '../../store';

import { SearchBarContainer, SearchIconWrapper, SearchInput } from './search-bar.styles';

function SearchBar() {
  const [input, setInput] = useState<string>('');
  const setSearch = useSetRecoilState(itemListSearch);
  const filter = useRecoilValue(itemListFilterState);

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
    setSearch(event.currentTarget.value);
  };

  const setPlaceholder = () => {
    let placeholder = '';
    switch (filter) {
      case 'movies':
        placeholder = 'Search for movies';
        break;
      case 'tv':
        placeholder = 'Search for TV series';
        break;
      case 'bookmarked':
        placeholder = 'Search for bookmarked movies and shows';
        break;
      default:
        placeholder = 'Search for movies or TV shows';
        break;
    }

    return placeholder;
  };

  const placeholder = setPlaceholder();

  return (
    <SearchBarContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <SearchInput
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => handleSearch(e)}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
