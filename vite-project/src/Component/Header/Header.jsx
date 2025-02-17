import React from "react";
import pix from "../../assets/CartIcon (2).png"
import { FaUser} from "react-icons/fa6"; 
import "./header.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";



function Header(){
    const [registration, setRegistration] = useState(false);
    const navigate = useNavigate();

    const handleHome =()=>{
        navigate("/home")
    }

    const handleCollections =()=>{
        navigate("/women")
    }

    const handleDetails =()=>{
        navigate("/detail")
    }

    const registrationDrop = () => {
        setRegistration(!registration);
      }

      const handleLogout = () => {
        navigate("/login");
      }

      const createAccount = () => {
        navigate("/");
      }
    
    

    
    return(
        <div className="mainwrapper">
            <div className="iconwrapper">
                <h1 style={{marginLeft: "100px", fontSize: "50px",}}>Footwears</h1>
                <div className="inputwrapper">
                    <input type="text" placeholder="Search" style={{width: "270px", height: "30px",
                     position: "relative", borderRadius: "10px", border: "none"}}/>
                    <div className="searchwrapper">
                    </div>
                </div>
            </div>

            <div className="outline">
                <ul>
                    
                    
                    <li onClick={handleHome}>HOME</li>
                 

                    
                    <li onClick={handleCollections}>WOMEN COLLECTIONS</li>
                 

                  
                    <li onClick={handleDetails}>ABOUT</li>
                 
                    
                    </ul>

                    <div className="cartwrap">
                        <img src={pix} alt="" style={{width: "30px", height: "30px"}} />
                        <h3>CART [0]</h3>

                        <div className="registration">
          <FaUser className="user-icon" onMouseEnter={registrationDrop} />

          {registration && (
            <div className="Authdrop" onMouseLeave={() => setRegistration(false)}>
              <button className="checkoutbtn" onClick={handleLogout}>CheckOut</button>
              <h4 className="createbtn" onClick={createAccount}>
                Create Account
              </h4>
            </div>
          )}
        </div>
                    </div>
            </div>

            <div className="writeupwrap">
                <h2>OUR BIGGEST SALES YET 50% OFF ALL SUMMER SHOES </h2>
            </div>
        </div>

    )
}


export default Header