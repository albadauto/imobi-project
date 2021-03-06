import React from 'react'
import { BrowserRouter, Routes as Rt, Route } from "react-router-dom";
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';
import About from './pages/About/Index';
import Announce from './pages/Announce/Index';
import Error from './pages/Error/Index';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import MyAccount from './pages/MyAccount/Index';
import Property from './pages/Property/Index';
import RecoverPassword from './pages/RecoverPassword/Index';
import Register from './pages/Register/Index';
import SingleAnnounce from './pages/SingleAnnounce/Index';
export default function Routes() {
  return (
    <BrowserRouter>
     <Header />
        <Rt>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/MyAccount' element={<MyAccount />} />
          <Route path='/Property' element={<Property />} />
          <Route path='/Announce' element={<Announce />} />
          <Route path='/RecoverPassword' element={<RecoverPassword />} />
          <Route path='/SingleAnnounce/:id' element={<SingleAnnounce />} />
          <Route path='/about' element={<About />} />

          <Route path="*" element={<Error />} />
        </Rt>
      <Footer />
    </BrowserRouter>
  )
}
