import React from 'react';
import App from './App';
import Error from './components/Error/Error';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Donate from './components/Donate/Donate';
import About from './components/About/About';
import OurStory from './components/OurStory/OurStory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
  },
  {
    path: "donate",
    element: <Donate />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "our_story",
    element: <OurStory/>,
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
