import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;