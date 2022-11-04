import { useRecoilState } from 'recoil';
import { userState } from '../../store';

import { ReactComponent as MovieIcon } from '../../assets/icons/icon-category-movie.svg';
import { ReactComponent as TvIcon } from '../../assets/icons/icon-category-tv.svg';
import { ReactComponent as BookmarkEmptyIcon } from '../../assets/icons/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkFullIcon } from '../../assets/icons/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/icon-play.svg';

import { Item } from '../../types';
import { bookmarkItem } from '../../services/userService';

import {
  BookmarkButton,
  CardContainer,
  CardImage,
  CardImageWrapper,
  CardInfo,
  CardInfoCategory,
  CardTitle,
  DetailsWrapper,
  PlayButton,
} from './card.styles';

export interface CardProps {
  item: Item,
  cardSize?: 'small' | 'large'
}

function Card({ item, cardSize = 'small' }: CardProps) {
  const {
    title,
    thumbnail,
    year,
    category,
    rating,
    isBookmarked,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _id,
  } = item;

  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const handleBookmarkItem = async () => {
    const updated = await bookmarkItem(currentUser.id, _id);
    setCurrentUser(updated.data);
  };

  return (
    <CardContainer className={cardSize === 'large' ? 'cardLarge' : ''}>
      <CardImageWrapper>
        <BookmarkButton onClick={handleBookmarkItem} aria-label="add to bookmarks">
          {
            isBookmarked
              ? <BookmarkFullIcon />
              : <BookmarkEmptyIcon />
          }
        </BookmarkButton>

        <PlayButton className="play-btn">
          <PlayIcon />
          <h4>Play</h4>
        </PlayButton>

        {
          cardSize === 'large'
            ? (
              <CardImage>
                <source media="(max-width: 29em)" srcSet={thumbnail.trending?.small} />
                <img src={thumbnail.trending?.large} alt={title} />
              </CardImage>
            )

            : (
              <CardImage>
                <source media="(max-width: 33em)" srcSet={thumbnail.regular.medium} />
                <source media="(max-width: 29em)" srcSet={thumbnail.regular.small} />
                <img src={thumbnail.regular.large} alt={title} />
              </CardImage>
            )
        }

      </CardImageWrapper>

      <DetailsWrapper>
        <CardInfo>
          <p>{year}</p>
          <p>&bull;</p>

          <CardInfoCategory>
            {
              category === 'Movie'
                ? <MovieIcon />
                : <TvIcon />
            }
            <p>{category}</p>
          </CardInfoCategory>

          <p>&bull;</p>
          <p>{rating}</p>
        </CardInfo>
        <CardTitle>{title}</CardTitle>
      </DetailsWrapper>
    </CardContainer>
  );
}

export default Card;
