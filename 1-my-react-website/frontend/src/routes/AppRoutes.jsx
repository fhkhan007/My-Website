import React from "react";
import { Route, Routes } from "react-router";

import Home from "../components/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default Router;
