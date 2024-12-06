"use client";


import { useState } from "react";

import "@/components/components.css";




export default () => {

    const [newAccount, setNewAccount] = useState(false);

    

    return <>
        <div style={{fontSize: "16px"}}>
            <div style={{background: "rgba(0,0,0,0.20)", fontWeight: 600, borderRadius: "16px"}}>
                <div style={{width: "200px", height: "50px", borderRadius: "10px", background: newAccount ? "white" : "none"}} onClick={() => setNewAccount(!newAccount)}>Create Account</div>
                <div style={{width: "200px", height: "50px", borderRadius: "10px", background: !newAccount ? "white" : "none"}} onClick={() => setNewAccount(!newAccount)}>Login</div>
            </div>
            

            <label htmlFor="usr" className="label-1">Username</label>
            <input style={{minHeight: "40px"}} type="text" id="usr"     name="user" className="input-txt-1" />
            <label htmlFor="psw" className="label-1">Password</label>
            <input style={{minHeight: "40px"}} type="password" id="psw" name="pass" className="input-txt-1" />
            
            <button className="btn-2">
                Login
            </button>

        </div>
    </>
}