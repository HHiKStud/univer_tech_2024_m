import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const id = 'testID'
    const uuid = 'testUUid'

    const navigate = useNavigate()
    // const handleNavigate = () => {
    //     window.location.href = '/user'
    // }

    return (
        <div style = {{ border: '1px solid #333', height: '40px', position: 'fixed', width: '100%', background: '#fff'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                
                <div onClick={() => navigate('/')}>Home</div>
                <div onClick={() => navigate('/info', { state: { msg: 'Yay!' } })}>Info</div>
                <div onClick={() => navigate('/user')}>User</div>
                {/* <div onClick={() => handleNavigate()}>User</div> */}
            </div>
        </div>
    )
}