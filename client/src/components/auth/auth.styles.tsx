import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { TEXT, devices } from '../../index.styles';

export const LogoIcon = styled(Logo)`
  position: absolute;
  top: 7.8rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const AuthContainer = styled.form`
  width: 40rem;
  margin: 19rem auto 0;
  padding: 3.6rem 3.2rem;
  border-radius: 20px;
  background-color: hsl(223, 36%, 13.5%);

  @media ${devices.mobile} {
    width: 87%;
    padding: 2.8rem 2.4rem 3.4rem;
  }

  .error-message {
    display: none;
    white-space: pre-line;
    margin-bottom: 2rem;

    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.4;
    color: hsl(0, 97%, 63%);
  }

  .error-message.show-error {
    display: inline-block;
  }
`;

export const AuthTitle = styled.h1`
  ${TEXT.headingL};
  margin-bottom: 2.7rem;

  @media ${devices.mobile} {
    font-size: 3.2rem
  }
`;

export const LoginInputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 4rem;
`;

export const SignupInputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 2.4rem;
`;

export const TextInputWrapper = styled.div`
  position: relative;
`;

export const InputError = styled.span`
  display: none;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  font-size: 1.3rem;
  font-weight: 300;
  color: hsl(0,97%,63%);
`;

export const AuthTextInput = styled.input`
  ${TEXT.bodyM};

  display: block;
  position: relative;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid hsl(223, 23%, 46%);
  padding: 1.8rem 1.7rem;
  caret-color: hsl(0, 97%, 63%);
  cursor: pointer;

  @media ${devices.mobile} {
    font-size: 1.5rem
  }
  
  &::placeholder {
    ${TEXT.bodyM};
    font-family: 'Outfit', sans-serif;
    opacity: 0.5;

    @media ${devices.mobile} {
    font-size: 1.5rem
  }
  }
  
  &:focus {
    outline: none;
    border-bottom: 1px solid hsl(0, 0%, 100%);
  }
  
  &:focus:invalid {
    border-bottom: 1px solid hsl(0, 97%, 63%);

    & ~ ${InputError} {
      display: block;
    }
  }
`;

export const AuthSubmitButton = styled.button`
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: hsl(0, 0%, 100%);

  width: 100%;
  margin-bottom: 2.6rem;
  border: none;
  border-radius: 6px;
  padding: 1.5rem 0;
  background-color: hsl(0, 97%, 63%);
  cursor: pointer;

  &:hover {
    color: hsl(223, 36%, 13%);
    background-color: hsl(0, 0%, 100%);
  }
`;

export const AuthRedirect = styled.div`
  ${TEXT.bodyM};
  text-align: center;

  @media ${devices.mobile} {
    font-size: 1.5rem
  }
`;

export const AuthLink = styled(Link)`
  font-size: inherit;
  font-weight: inherit;

  &:link,
  &:visited {
    text-decoration: none;
    color: hsl(0, 97%, 63%);
  }
`;
