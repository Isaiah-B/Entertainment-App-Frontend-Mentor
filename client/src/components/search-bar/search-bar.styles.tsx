import styled from 'styled-components';
import { TEXT, devices } from '../../index.styles';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  width: 97%;

  @media ${devices.mobile} {
    gap: 0.6rem;
  }
`;

export const SearchInput = styled.input`
  ${TEXT.headingM}

  width: 100%;
  padding: 1.6rem 0 1.5rem 0.4rem;
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  caret-color: hsl(0, 97%, 63%);
  cursor: pointer;

  
  &::placeholder {
    ${TEXT.headingM};
    font-family: 'Outfit', sans-serif;
    opacity: 0.5;
  }

  &:focus {
    border-bottom: 1px solid hsl(223, 23%, 46%);
    outline: none;

    @media ${devices.tablet} {
      border-bottom: 1px solid transparent;
    }
  }
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    transform: scale(0.8);
  }
`;
