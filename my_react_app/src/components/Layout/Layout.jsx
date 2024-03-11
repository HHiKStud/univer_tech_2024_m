import React, { useRef } from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

import './Layout.css'

export const Layout = ({children}) => {
    // const textareaRef = useRef()
    
    return (
        <div className="layout_container">
            <Header />
            
            <div className="child_container" style={{
                margin: '0 auto',
                width: '64 em'
            }}>
                {/* <textarea ref={textareaRef}></textarea>
                <input type='button' value={'Get text'} onClick={() => {console.log('ref', textareaRef.current.value)}}/>    */}
                {children}
            </div>
            <Footer />
        </div>
    )
}