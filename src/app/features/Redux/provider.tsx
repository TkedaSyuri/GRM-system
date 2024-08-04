"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./store"


interface ProviderProps{
    children: ReactNode
}

export const Providers:React.FC<ProviderProps>=({children})=>{
return (
    <Provider store={store}>
     {children}
    </Provider>
)
}