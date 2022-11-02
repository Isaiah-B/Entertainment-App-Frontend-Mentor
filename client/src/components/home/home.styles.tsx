import styled from 'styled-components';
import { devices } from '../../index.styles';
import { ListContainer } from '../list/list.styles';
import { NavContainer } from '../nav/nav.styles';
import { SearchBarContainer } from '../search-bar/search-bar.styles';
import { TrendingContainer } from '../trending/trending.styles';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 11rem 3fr auto;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 9.4rem 3fr auto auto;
  }

  @media ${devices.mobile} {
    grid-template-rows: repeat(4, auto);
    margin-left: 0;
  }

  ${NavContainer} {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    margin: 3.2rem 3.5rem 0;

    @media ${devices.tablet} {
      grid-column: 1;
      grid-row: 1 / 2;
      margin: 2.2rem 2.5rem 0;
    }

    @media ${devices.mobile} {
      margin: 0;
    }
  }

  ${SearchBarContainer} {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    padding-top: 5rem;
    margin-left: 3.5rem;

    @media ${devices.tablet} {
      grid-column: 1;
      grid-row: 2 / 3;
      padding-top: 2rem;
    }

    @media ${devices.mobile} {
      margin-left: 1.6rem;
      padding-top: 1.2rem;
    }
  }

  ${TrendingContainer} {
    padding-top: 2.3rem;
    margin-left: 3.5rem;

    @media ${devices.mobile} {
      padding-top: 1.2rem;
      margin-left: 1.6rem;
    }
  }

  ${ListContainer} {
    padding: 4.4rem 0 5rem;
    margin-left: 3.5rem;
    
    @media ${devices.tablet} {
      padding: 4.2rem 0 5rem;
    }

    @media ${devices.mobile} {
      margin-left: 1.6rem;
      padding: 2.8rem 0 5rem;
    }
  }
`;
