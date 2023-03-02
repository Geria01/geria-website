import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Loader from '@/components/FullPageLoader';
import PrivateRoute from '@/components/PrivateRoute';
import { AuthProvider, useAuth } from '@/context/auth';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  // Add your protected routes here
  const protectedRoutes = ['/dashboard, /complete-profile'];

  return (
    <>
      {
        pageProps.requiresAuth && !isAuthenticated ?
          rounter.push('/signin') :
          (<AuthProvider>
            <PrivateRoute protectedRoutes={protectedRoutes}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PrivateRoute>
          </AuthProvider>)
      }
    </>
  );
}
