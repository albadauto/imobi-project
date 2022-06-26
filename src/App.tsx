import React from 'react'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './globalStyles'
import HeaderProvider, { HeaderContext } from './providers/HeaderProvider'
import Routes from './routes'

export default function App() {
  return (
    <>
      <HeaderProvider>
        <GlobalStyle />
        <Routes />
        <ToastContainer />
      </HeaderProvider>
      
    </>
  )
}
