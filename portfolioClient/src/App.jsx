import React, { useState } from "react";
import './App.css';
import './assets/styles/sectionStyles.css';
import { RouterProvider } from "react-router-dom";
import createRouter from "./router_config";

function App() {
  const [showInputScreen, setShowInputScreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const router = createRouter(showPopup, showInputScreen);

  return (
    <div className='app-parent'>
      <div className='load-pages'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
