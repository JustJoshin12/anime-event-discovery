// In components/ProtectedLayout.js
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingScreenPage from '@/src/pages/loading';

const ProtectedLayout = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.user.userInfo !== null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <LoadingScreenPage/>; // or a loading spinner
  }

  return <>{children}</>;
};

export default ProtectedLayout;
