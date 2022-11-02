import styled from 'styled-components';
import { devices } from '../../index.styles';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 9.6rem;
  height: 96rem;
  padding: 3.5rem;
  border-radius: 20px;
  background-color: hsl(223, 36%, 13%);

  @media ${devices.tablet} {
    flex-direction: row;

    width: auto;
    height: auto;
    padding: 2.2rem;
    border-radius: 10px;
  }

  @media ${devices.mobile} {
    height: 5.6rem;
    padding: 0 1.6rem 0 1.2rem;
    border-radius: 0;
  }
`;

export const NavElementsTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.4rem;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.7rem;
  
  list-style: none;
  margin-top: -47.2rem;

  @media ${devices.tablet} {
    flex-direction: row;
    margin-top: 0;
  }

  @media ${devices.mobile} {
    gap: 2rem;
  }
`;

export const NavButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;

  @media ${devices.mobile} {
    transform: scale(0.8);
  }

  path {
    fill: ${(props) => (props.selected ? 'hsl(0, 0%, 100%)' : '')};
  }

  &:hover {
    path {
      fill: hsl(0, 97%, 63%);
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: hsl(0, 0%, 100%);

  img {
    height: 100%;
    padding: 0.1rem;
  }

  @media ${devices.tablet} {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media ${devices.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    transform: scale(0.8);
  }
`;
