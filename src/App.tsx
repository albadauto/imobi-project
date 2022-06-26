import React from 'react'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './globalStyles'
import Routes from './routes'

export default function App() {
  return (
    <>
    <GlobalStyle />
      <Routes />
    <ToastContainer />
    </>
  )
}
