import React from "react";
import Home from "./pages/homepage/Home";
import Login from "./pages/Login/Login";
import List from "./pages/listpage/Listpage";
import SinglePage from "./pages/singlepage/SinglePage";
import Newpage from "./pages/newpage/Newpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";
import "./Style/dark.scss";
import { DarkModeContext } from "./Context/darkModeContext";
import { useContext } from "react";

const App = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  console.log(darkMode, dispatch);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<Newpage inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <Newpage inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
