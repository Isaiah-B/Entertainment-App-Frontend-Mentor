import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import useLocalStorage from '../../hooks/useLocalStorage';

import { userState } from '../../store';
import { createUser } from '../../services/authService';

import {
  LogoIcon,
  AuthContainer,
  AuthLink,
  AuthRedirect,
  AuthSubmitButton,
  AuthTextInput,
  AuthTitle,
  SignupInputFields,
  InputError,
  TextInputWrapper,
} from './auth.styles';
import Loader from '../loader/loader.component';

function Signup() {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordConfirmInput, setPasswordConfirmInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const setCurrentUser = useSetRecoilState(userState);
  const [user, setUser] = useLocalStorage('entertainment-user', '');

  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const displayError = (message: string) => {
    const processedMessage = message.split('.').join('\n');

    setError(processedMessage);
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
      setError('');
    }, 5000);
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const userRes = await createUser({
        email: emailInput,
        password: passwordInput,
        passwordConfirm: passwordConfirmInput,
      });

      const { id, email, bookmarked } = userRes.data;

      const userFields = { id, email, bookmarked };

      setCurrentUser(userFields);
      setUser(id);
      setIsLoading(false);
    } catch (err: any) {
      displayError(err.response.data.message);
    }
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <LogoIcon />
      <AuthContainer onSubmit={handleSubmitForm}>
        <AuthTitle>Sign Up</AuthTitle>
        <SignupInputFields>
          <TextInputWrapper>
            <AuthTextInput
              type="email"
              placeholder="Email address"
              onChange={({ target }) => setEmailInput(target.value)}
              required
            />
            <InputError>Can&apos;t be empty</InputError>
          </TextInputWrapper>

          <TextInputWrapper>
            <AuthTextInput
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPasswordInput(target.value)}
              required
            />
            <InputError>Can&apos;t be empty</InputError>
          </TextInputWrapper>

          <TextInputWrapper>
            <AuthTextInput
              type="password"
              placeholder="Repeat Password"
              onChange={({ target }) => setPasswordConfirmInput(target.value)}
              required
            />
            <InputError>Can&apos;t be empty</InputError>
          </TextInputWrapper>
        </SignupInputFields>

        <span className={`error-message ${showError ? 'show-error' : ''}`}>
          {error}
        </span>

        <AuthSubmitButton type="submit">Create an account</AuthSubmitButton>

        <AuthRedirect>
          Already have an account?
          &nbsp;
          <AuthLink to="/login">Login</AuthLink>
        </AuthRedirect>
      </AuthContainer>
    </>
  );
}

export default Signup;
