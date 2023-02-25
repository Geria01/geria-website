import { createContext, useState, useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

import { nextApi } from '@/api';
import Loader from '@/components/Loader';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = !!user;

  const register = async (data) => {
    try {
      const reponse = await nextApi.post('api/auth/register', data);
      console.log('reponse', reponse);
      return ['ok', reponse.data.message];
    } catch (error) {
      return ['error', error.response.data.message];
    }
  };

  const signin = async (data) => {
    try {
      const response = await nextApi.post('/api/auth/signin', data);
      return ['ok', response.data.user];
    } catch (error) {
      console.log("context login error ======= ", error.message);
      return ['error', error.response.data.message];
    }
    setUser(user);
  };

  const getUserToken = () => {
    return nextApi.get('api/auth/token');
  }

  const signout = async () => {
    const resp = await nextApi.post('/api/auth/signout', {
      method: 'POST',
    });
    if (resp.data.message == 'success') {
      setUser('');
      // setEmail('');
      // setId('');
      router.push('/signin');
    }
  };

  const checkLogin = async () => {
    try {
      const resp = await nextApi.get('/api/auth/user');
      setUser(resp.data.user);
      setEmail(resp.data.email);
      setId(resp.data.id);
      return resp;
    } catch (error) {
      return error.response;
    }
  };

  useEffect(() => {
    const Component = children.type;

    // If it doesn't require auth, everything's good.
    if (!Component.requiresAuth) return;

    // If we're already authenticated, everything's good.
    if (isAuthenticated) return;

    // If we don't have a token in the cookies, logout
    const token = getUserToken();
    if (!token) {
      return logout({ redirectLocation: Component.redirectUnauthenticatedTo });
    }

    // If we're not loading give the try to authenticate with the given token.
    if (!loading) {
      authenticate(token);
    }
  }, [children.type, isAuthenticated, loading]);

  const useract = {
    isAuthenticated: !!user,
    loading,
    user,
    register,
    signin,
    signout,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={useract}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
