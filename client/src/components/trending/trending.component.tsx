import { useRecoilValue } from 'recoil';

import { trendingItems } from '../../store';
import Card from '../card/card.component';

import {
  TrendingContainer, TrendingList, TrendingListWrapper, TrendingTitle,
} from './trending.styles';

function Trending() {
  const trendingItemsList = useRecoilValue(trendingItems);

  return (
    <TrendingContainer>
      <TrendingTitle>Trending</TrendingTitle>
      <TrendingListWrapper>
        <TrendingList>
          {
            trendingItemsList.map((item) => <Card key={item._id} item={item} cardSize="large" />)
            }
        </TrendingList>
      </TrendingListWrapper>
    </TrendingContainer>
  );
}

export default Trending;
