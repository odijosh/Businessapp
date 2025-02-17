import React from "react"; 
import "./DisplayPage.css"
import picture from "../../assets/boyshoe2.jpg"
import pics from "../../assets/boyshoe1.jpg"




function DisplayPage(){
    return(
        <div className="maincont">
           <div className="imgwrap">
            <img src={picture} alt="" style={{width: "100%", height: "100vh", background: "cover"}} 
            />
            
           </div>

           <div className="imgwrap2">
            <img src={pics} alt="" style={{width: "50%", height: "60vh", background: "cover"}}/>
            <img src={pics} alt="" style={{width: "50%", height: "60vh", background: "cover"}}/>
           </div>
        </div>



    )
}

export default DisplayPage