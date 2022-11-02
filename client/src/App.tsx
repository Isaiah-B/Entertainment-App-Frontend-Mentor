import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { userState } from './store/index';
import { getUser } from './services/userService';
import useLocalStorageValue from './hooks/useLocalStorageValue';

import Login from './components/auth/login.component';
import Signup from './components/auth/signup.component';
import Home from './components/home/home.component';

function App() {
  const currentUser = useLocalStorageValue('entertainment-user');
  const setCurrentUser = useSetRecoilState(userState);

  // Get user from local storage and store into Recoil state
  useEffect(() => {
    const setUser = async () => {
      if (currentUser) {
        const user = await getUser(currentUser);
        setCurrentUser(user.data);
      }
    };
    setUser();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
