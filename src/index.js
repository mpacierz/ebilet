import React from 'react';
import ReactDOM from 'react-dom';
import NavRoutes from './Component/Nav/NavRoutes';
import HeaderMain from './Component/Header/HeaderMain';
import Footer from './Component/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HeaderMain />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('container')
);



reportWebVitals();
