import { Outlet } from "react-router-dom";

import { Layout, Navigation } from "../components";

export const Root = () => {
  return (
    <>
      <Navigation />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
