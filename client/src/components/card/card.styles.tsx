import styled from 'styled-components';
import { devices, TEXT } from '../../index.styles';

export const BookmarkButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  z-index: 100;

  width: 32px;
  height: 32px;
  cursor: pointer;

  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  background-color: hsla(224, 30%, 9%, 0.5);

  &:hover {
    background-color: hsl(0, 0%, 100%);

    svg path {
      stroke: hsl(0, 0%, 0%);
    }
  }
  
  .cardLarge {
    right: 2.4rem;

    @media ${devices.mobile} {
      right: 0.8rem
    }
  }

  @media ${devices.mobile} {
      top: 0.8rem;
      right: 0.8rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  position: relative;
  height: 22.6rem;
  width: 28rem;

  &.cardLarge {
    width: 47rem;
    height: 23rem;

    p {
      ${TEXT.bodyM};
    }

    h3 {
      ${TEXT.headingS};
    }
    
    @media (max-width: 33em) {
      width: 36rem;
      height: 18rem;
    }
    
    @media ${devices.mobile} {
      width: 24rem;
      height: 13.9rem;
    }
    
  }

  @media ${devices.laptop} {
    width: 22rem;
    height: 19rem;
  }

  @media (max-width: 33em) {
    width: 20rem;
    height: 17rem;
  }

  @media ${devices.mobile} {
    width: 16.4rem;
    height: 15.4rem;
  }
`;

export const CardImageWrapper = styled.div`
  height: 17.2rem;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;


  &::after {
    display: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: hsla(0, 0%, 0%, 0.5);
  }

  &:hover::after {
    display: block;
  }

  &:hover .play-btn {
    display: flex;
  }

  .cardLarge > & {
    height: 100%;
  }
`;

export const PlayButton = styled.button`
  display: none;
  align-items: center;
  gap: 1.9rem;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  padding: 0.8rem 2.5rem 0.8rem 0.9rem;
  border: none;
  border-radius: 29px;
  background-color: hsla(0, 0%, 100%, 0.25);
  cursor: pointer;

  h4 {
    ${TEXT.headingXS};
    font-family: 'Outfit', sans-serif;
  }
`;

export const CardImage = styled.picture`
  img {
    height: 100%;
    width: 100%;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .cardLarge > & {
    position: absolute;
    bottom: 2.4rem;
    left: 2.4rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  gap: 0.8rem;

  p {
    ${TEXT.bodyS};
  }

`;

export const CardInfoCategory = styled.div`
  display: flex;
  gap: 0.6rem;
`;

export const CardTitle = styled.h3`
  ${TEXT.headingXS}
`;
