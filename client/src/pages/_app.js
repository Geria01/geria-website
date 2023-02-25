import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const { setUser } = useAuth();
  const rounter = useRouter();

  return (
    <>
      {Component.requiresAuth && (
        <Head>
          <script
            // If no token is found, redirect inmediately
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie || document.cookie.indexOf('token') === -1)
            {location.replace(
              "/signin?next=" +
                encodeURIComponent(location.pathname + location.search)
            )}
            else {document.documentElement.classList.add("render")}`,
            }}
          />
        </Head>
      )}
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}
