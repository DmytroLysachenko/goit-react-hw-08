import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Loading } from '../Loading/Loading';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
};
