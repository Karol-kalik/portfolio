import React from 'react';
import { HashRouter } from "react-router-dom";
import Loader from './Loader';
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import '../style/App.css';
import '../phonStyle/App.css';
import '../style/ico.css';



function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Loader />
        <Navigation />
        <Page />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
