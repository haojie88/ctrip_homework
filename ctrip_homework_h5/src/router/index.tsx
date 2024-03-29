import React, { FC, Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import routes from "./routes";
import Home from "../views/Home/Home";

// 统一路由配置
// const Element = function Element(){}
const RouterView = () => {
  // const element = useRoutes(routes)

  return (
    // <Suspense>
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
    // </Suspense>
  );
};
export default RouterView;
