import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPageMui from "./pages/LoginPageMui";
import InputScreenPage from "./pages/InputScreenPage";
import { INITIAL_RESUME_FIELDS } from "./constants";


const createRouter = (showPopup, showInputScreen) => {

  return createBrowserRouter([
    {
      path: "/",
      element: (<><HomePage showPopup={showPopup} showInputScreen={showInputScreen} /></>)
      
    },
    {
      path: "/login",
      element: <LoginPageMui />,
    },
    {
      path: "/edit-screen",
      element: <InputScreenPage data={INITIAL_RESUME_FIELDS}/>,
    }
  ]);
};

export default createRouter;
