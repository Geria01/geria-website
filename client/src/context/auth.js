import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import Router, { useRouter } from 'next/router';

import { nextApi } from '@/api';
import Loader from '@/components/FullPageLoader';
import useLocalStorageState from 'use-local-storage-state';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const router = useRouter();
  const [user, setUser] = useLocalStorageState('user', { defaultValue: null });
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useLocalStorageState('isAuthenticated', { defaultValue: false });

  const register = async (data) => {
    try {
      const reponse = await nextApi.post('api/auth/register', data);
      return ['ok', reponse.data.message];
    } catch (error) {
      return ['error', error.response.data.message];
    }
  };

  const signin = async (data) => {
    try {
      const response = await nextApi.post('/api/auth/signin', data);
      setUser(response.data.user.username);
      setIsAuthenticated(true);
      return ['ok'];
    } catch (error) {
      return ['error', error.response.data.message];
    }
    setUser(user);
  };

  const signout = async () => {
    const resp = await nextApi.post('/api/auth/signout');
    if (resp.data.message == 'success') {
      setUser('');
      setIsAuthenticated(false);
      router.push('/');
    }
  };

  const checkLogin = useCallback(async (token) => {
    try {
      const resp = await nextApi.get('/api/auth/user');
      setUser(resp.data.user);
      setIsAuthenticated(true);
      return resp;
    } catch (error) {
      return error.response;
    }
  }, [setIsAuthenticated, setUser]);

  const useract = {
    isAuthenticated,
    loading,
    user,
    register,
    signin,
    signout,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={useract}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
