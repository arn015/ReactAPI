import {useState} from 'react'
import {useNavigate} from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const signIn = () => {
        navigate("/private");
    }
    return(
        <>
            <div style = {{minHeight: 800, marginTop: 20 }}>
                <h1>Home Page</h1>
                <div>
                    <button type = 'button' onClick = {signIn}>Login</button>
                </div>
            </div>

        </>
    )
}