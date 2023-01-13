import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Navigate } from 'react-router-dom';
import { userState } from '../../store/index';
import useLocalStorage from '../../hooks/useLocalStorage';

import { login } from '../../services/authService';

import {
  LogoIcon,
  AuthContainer,
  AuthSubmitButton,
  AuthTextInput,
  AuthTitle,
  AuthRedirect,
  LoginInputFields,
  AuthLink,
  TextInputWrapper,
  InputError,
} from './auth.styles';
import Loader from '../loader/loader.component';

function Login() {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  const setCurrentUser = useSetRecoilState(userState);
  const [user, setUser] = useLocalStorage('entertainment-user', '');

  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const userRes = await login({ email: emailInput, password: passwordInput });

      const { id, email, bookmarked } = userRes.data;

      const userFields = { id, email, bookmarked };

      setCurrentUser(userFields);
      setUser(id);
      setLoading(false);
    } catch (err: any) {
      displayError(err.response.data.message);
    }
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <LogoIcon />
      <AuthContainer onSubmit={(e) => handleSubmitForm(e)}>
        <AuthTitle>Login</AuthTitle>
        <LoginInputFields>
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
        </LoginInputFields>

        <span className={`error-message ${showError ? 'show-error' : ''}`}>
          {error}
        </span>

        <AuthSubmitButton type="submit">Login to your account</AuthSubmitButton>

        <AuthRedirect>
          Don&apos;t have an account?
          &nbsp;
          <AuthLink to="/signup">Sign Up</AuthLink>
        </AuthRedirect>
      </AuthContainer>
    </>
  );
}

export default Login;
