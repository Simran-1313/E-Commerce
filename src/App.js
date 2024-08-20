import logo from './logo.svg';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import Layout from './components/Layout';
import Breadcrumb from "./components/Breadcrumb"

function App() {

 
  return (
    <Router >
      
     
       <Layout  >
       <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ))}
        </Routes>
       </Layout>
      
    </Router>
  );
}

export default App;
