import React from 'react'
import { BrowserRouter, Routes as Rt, Route } from "react-router-dom";
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
export default function Routes() {
  return (
    <BrowserRouter>
     <Header />
        <Rt>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
        </Rt>
      <Footer />
    </BrowserRouter>
  )
}
