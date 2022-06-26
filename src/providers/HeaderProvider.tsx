import { createContext, useContext, useState } from "react";
import React from 'react'

export const HeaderContext = createContext({});

interface BarModel{
    url:string,
    title: string
}

interface Props{
    children: React.ReactNode
}
export default function HeaderProvider(props: Props) {
    const [bar, setBar] = useState<BarModel>({
        url: "/Login",
        title: "Login"
    })
  return (
    <HeaderContext.Provider value={{bar, setBar}}>
        {props.children}
    </HeaderContext.Provider>
  )
}


export const useHeader = () => useContext(HeaderContext);