import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Detail />}></Route>
        </Layout>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
