import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBar from 'components/SharedLayout/HeaderBar';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <HeaderBar />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
