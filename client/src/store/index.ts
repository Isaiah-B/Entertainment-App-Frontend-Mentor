import { atom, selector } from 'recoil';
import { User, Item } from '../types';

export const userState = atom({
  key: 'user',
  default: {} as User,
});

export const bookmarkedItemsState = selector({
  key: 'BookmarkedList',
  get: ({ get }) => {
    const user = get(userState);
    return user.bookmarked;
  },
});

export const itemListState = atom({
  key: 'ItemList',
  default: [] as Item[],
});

export const itemListFilterState = atom({
  key: 'ItemFilter',
  default: 'home',
});

export const itemListSearch = atom({
  key: 'ItemSearch',
  default: '',
});

export const filteredItemState = selector({
  key: 'FilteredItemList',
  get: ({ get }) => {
    const filter = get(itemListFilterState);
    const search = get(itemListSearch);
    const list = get(itemListState);

    const isInSearch = (itemTitle: string) => (
      itemTitle.toLowerCase().includes(search.toLowerCase())
    );

    if (search.length > 0) {
      switch (filter) {
        case 'home':
          return list.filter((item) => isInSearch(item.title));
        case 'movies':
          return list.filter((item) => item.category === 'Movie' && isInSearch(item.title));
        case 'tv':
          return list.filter((item) => item.category === 'TV Series' && isInSearch(item.title));
        case 'bookmarked':
          return list.filter((item) => item.isBookmarked && isInSearch(item.title));
        default:
          return list;
      }
    } else {
      switch (filter) {
        case 'home':
          return list.filter((item) => item.isTrending === false);
        case 'movies':
          return list.filter((item) => item.category === 'Movie');
        case 'tv':
          return list.filter((item) => item.category === 'TV Series');
        default:
          return list;
      }
    }
  },
});

export const trendingItems = selector({
  key: 'TrendingItems',
  get: ({ get }) => {
    const list = get(itemListState);

    return list.filter((item) => item.isTrending === true);
  },
});

export const bookmarkedItems = selector({
  key: 'BookmarkedItems',
  get: ({ get }) => {
    const list = get(itemListState);

    return {
      movies: list.filter((item) => item.isBookmarked && item.category === 'Movie'),
      tv: list.filter((item) => item.isBookmarked && item.category === 'TV Series'),
    };
  },
});
