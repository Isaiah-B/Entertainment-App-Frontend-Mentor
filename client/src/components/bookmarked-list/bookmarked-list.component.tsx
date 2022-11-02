import { useRecoilValue } from 'recoil';
import { bookmarkedItems } from '../../store';
import List from '../list/list.component';
import { BookmarkedListContainer } from './bookmarked-list.styles';

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
