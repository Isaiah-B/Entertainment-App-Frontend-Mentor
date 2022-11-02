import styled from 'styled-components';
import { devices, TEXT } from '../../index.styles';

export const TrendingContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const TrendingTitle = styled.h1`
  ${TEXT.headingL};
  margin-bottom: 1.3rem;

  @media ${devices.tablet} {
    margin-bottom: 1.2rem;
  }
`;

export const TrendingListWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 24.7rem;
  overflow-x: auto;

  @media (max-width: 33em) {
    height: 19rem;
  }

  @media ${devices.mobile} {
    height: 14.5rem;
  }
`;

export const TrendingList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  position: absolute;
  bottom: 0;
  left: 0;
`;
