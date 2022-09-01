import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "components/SharedLayout/HeaderBar";

const SharedLayout = () => {
  return (
    <>
      <HeaderBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
