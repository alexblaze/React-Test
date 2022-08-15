import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../user/pages/Products";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact>
          <Route path="/" exact element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
