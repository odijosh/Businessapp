import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css"



function SignUpPage(){
    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate("/login")
    }

    const handleHome=()=>{
        navigate("/home")
    }
    return(
        <div className="fullwrap">
            <div className="containerwrap">
                <h1 style={{marginLeft: "150px"}}>WELCOME!!!</h1>

                <form>
                    <div className="formwrap">
                        <div className="nameformwrap">
                            <h2 style={{color: "blue"}}>Username</h2>
                            <input type="text" placeholder="Enter usename"/>
                        </div>

                        <div className="nameformwrap">
                            <h2 style={{color: "blue"}}>Email</h2>
                            <input type="text" placeholder="Enter email"/>
                        </div>
                        
                        <div className="nameformwrap">
                            <h2 style={{color: "blue"}}>Password</h2>
                            <input type="text" placeholder="Enter password"/>
                        </div>

                        <div className="main">
                            <button className="wrap" onClick={handleHome}>Signup</button>
                            </div>
                            <div className="accwrap">
                                <h3>Do you have an account?</h3>
                                <h3 style={{color: "blue", cursor: "pointer"}} onClick={handleLogin}>Login</h3>
                           
                            </div>


                    </div>


                </form>

            </div>
           
        </div>



    )


}


export default SignUpPage