import React from "react";
import pix from "../../assets/girlshoe4.png"
import pix2 from "../../assets/girlshoe1.jpg"
import pix3 from "../../assets/girlshoe2.jpg"
import "./womenCollection.css"


function WomenCollection(){
    return(
         <div className="maincont1">
                   <div className="imgwrap1">
                    <img src={pix} alt="" style={{width: "70%", height: "70vh", background: "cover", 
                    borderTopLeftRadius: "30px", borderTopRightRadius: "30px", borderTop: "5px solid black",
                    borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", borderBottom: "5px solid black"}} />
                   </div>
        
                   <div className="imgwrap2">
                    <img src={pix2} alt="" style={{width: "30%", height: "50vh", background: "cover", 
                     borderTopLeftRadius: "30px", borderTopRightRadius: "30px", borderTop: "5px solid black",
                    borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", borderBottom: "5px solid black"

                    }}/>
                    <img src={pix3} alt="" style={{width: "30%", height: "50vh", background: "cover",
                         borderTopLeftRadius: "30px", borderTopRightRadius: "30px", borderTop: "5px solid black",
                    borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", borderBottom: "5px solid black"
                    }}/>
                    <img src={pix2} alt="" style={{width: "30%", height: "50vh", background: "cover",
                         borderTopLeftRadius: "30px", borderTopRightRadius: "30px", borderTop: "5px solid black",
                    borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", borderBottom: "5px solid black"
                     }}/>
                   </div>
                </div>

    )
}


export default  WomenCollection