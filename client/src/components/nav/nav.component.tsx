import { useRecoilState } from 'recoil';
import { ReactComponent as NavHomeIcon } from '../../assets/icons/icon-nav-home.svg';
import { ReactComponent as NavMovieIcon } from '../../assets/icons/icon-nav-movies.svg';
import { ReactComponent as NavTvIcon } from '../../assets/icons/icon-nav-tv-series.svg';
import { ReactComponent as NavBookmarkIcon } from '../../assets/icons/icon-nav-bookmark.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

import { itemListFilterState } from '../../store';

import {
  LogoWrapper,
  NavButton, NavContainer, NavList, UserAvatarWrapper,
} from './nav.styles';

function Nav() {
  const [filter, setFilter] = useRecoilState(itemListFilterState);

  return (
    <NavContainer>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>

      <NavList>
        <li>
          <NavButton
            selected={filter === 'home'}
            onClick={() => setFilter('home')}
            aria-label="home"
          >
            <NavHomeIcon />
          </NavButton>
        </li>
        <li>
          <NavButton
            selected={filter === 'movies'}
            onClick={() => setFilter('movies')}
            aria-label="movies"
          >
            <NavMovieIcon />
          </NavButton>
        </li>
        <li>
          <NavButton
            selected={filter === 'tv'}
            onClick={() => setFilter('tv')}
            aria-label="tv"
          >
            <NavTvIcon />
          </NavButton>
        </li>
        <li>
          <NavButton
            selected={filter === 'bookmarked'}
            onClick={() => setFilter('bookmarked')}
            aria-label="bookmarked movies and shows"
          >
            <NavBookmarkIcon />
          </NavButton>
        </li>
      </NavList>

      <UserAvatarWrapper>
        <img src="./assets/image-avatar.png" alt="user" />
      </UserAvatarWrapper>
    </NavContainer>
  );
}

export default Nav;
