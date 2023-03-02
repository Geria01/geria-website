import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/auth';
import FullPageLoader from '@/components/FullPageLoader';

const PrivateRoute = ({ protectedRoutes, children }) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!loading && !isAuthenticated && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push('/signin');
    }
  }, [loading, isAuthenticated, pathIsProtected, router]);

  if ((loading || !isAuthenticated) && pathIsProtected) {
    return <FullPageLoader />;
  }

  return children;
}

export default PrivateRoute;
