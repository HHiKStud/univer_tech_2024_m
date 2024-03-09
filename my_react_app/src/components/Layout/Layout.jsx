import React from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const Layout = ({children}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '768px',
            justifyContent: 'space-between'
          }}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}