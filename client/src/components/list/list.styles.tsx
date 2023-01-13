import styled from 'styled-components';
import { devices, TEXT } from '../../index.styles';

export const ListContainer = styled.div`
`;

export const ListTitle = styled.h1`
  ${TEXT.headingL};
  margin-bottom: 3.5rem;

  @media ${devices.tablet} {
    margin-bottom: 2.6rem;
  } 
`;

export const ListContents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
  grid-row-gap: 3.8rem;

  @media ${devices.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  }

  @media (max-width: 33em) {
    grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  }

  @media ${devices.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  }
`;
