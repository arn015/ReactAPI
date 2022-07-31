import {useNavigate} from "react-router-dom";
import useState from "react";

export default function Private(){
    const navigate = useNavigate();
    const signOut = () => {
        navigate("/");
    }
    return(
        <>
            <div style = {{minHeight: 800, marginTop: 20 }}>
                <h1>Private Page</h1>

                <div>
                    <button type = 'button' onClick= {signOut}>Public</button>
                </div>
            </div>
        </>
    )
}