import { useRecoilValue } from 'recoil';
import { bookmarkedItems } from '../../store';
import { BookmarkedListContainer } from './bookmarked-list.styles';
import List from '../list/list.component';

function BookmarkedList() {
  const bookmarkedMoviesList = useRecoilValue(bookmarkedItems).movies;
  const bookmarkedTvList = useRecoilValue(bookmarkedItems).tv;

  return (
    <BookmarkedListContainer>
      <List title="Bookmarked Movies" items={bookmarkedMoviesList} />
      <List title="Bookmarked TV Series" items={bookmarkedTvList} />
    </BookmarkedListContainer>
  );
}

export default BookmarkedList;
