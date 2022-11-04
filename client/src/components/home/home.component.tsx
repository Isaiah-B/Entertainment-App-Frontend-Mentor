import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  itemListState, itemListFilterState, filteredItemState, itemListSearch, userState,
} from '../../store/index';

import { getAllItems } from '../../services/itemService';
import { Item } from '../../types';

import List from '../list/list.component';
import Trending from '../trending/trending.component';
import SearchBar from '../search-bar/search-bar.component';
import Nav from '../nav/nav.component';
import BookmarkedList from '../bookmarked-list/bookmarked-list.component';

import { HomeContainer } from './home.styles';

function Home() {
  const setItemList = useSetRecoilState(itemListState);
  const currentUser = useRecoilValue(userState);

  if (!currentUser.id) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const getItems = async () => {
      const res = await getAllItems();

      const items = res.data.map((item: Item) => {
        if (currentUser.bookmarked && currentUser.bookmarked.includes(item._id)) {
          return { ...item, isBookmarked: true };
        }
        return item;
      });
      setItemList(items);
    };

    getItems();
  }, [currentUser]);

  const filteredList = useRecoilValue(filteredItemState);
  const searchInput = useRecoilValue(itemListSearch);
  const filter = useRecoilValue(itemListFilterState);

  interface ITitleMap {
    home: string,
    movies: string,
    tv: string,
  }

  const listTitleMap: ITitleMap = {
    home: 'Recommended for you',
    movies: 'Movies',
    tv: 'TV Series',
  };

  const listTitle = searchInput.length > 0
    ? `Found ${filteredList.length} results for '${searchInput}'`
    : listTitleMap[filter as keyof ITitleMap];

  if (!filteredList) return null;

  return (
    <HomeContainer>
      <SearchBar />
      <Nav />
      {
        !searchInput && filter === 'home'
        && <Trending />
      }
      {
        !searchInput && filter === 'bookmarked'
          ? <BookmarkedList />
          : <List title={listTitle} items={filteredList} />
      }
    </HomeContainer>
  );
}

export default Home;
