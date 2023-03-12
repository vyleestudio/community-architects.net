import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './router';
// CSS
import './styles/index.css';
import './styles/fonts.css';
import 'animate.css/animate.min.css';

// Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);