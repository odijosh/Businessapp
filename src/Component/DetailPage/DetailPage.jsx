import React from "react";
import detailimage from "../../assets/boyshoe1.jpg"
import "./DetailPage.css"




function DetailPage(){
    return(
        <div className="mainbody">

            
            <div className="container">

                <div className="rightcont">
                    <img src={detailimage} style={{width: "100%", height: "100%", background: "cover"}} alt="" />
                </div>
                <div className="leftcont">
                    <div className="writeupcont">
                        <h3>Men's Casual Crew Neck Sweatshirt & Joggers Set - Color Block, Polyester Blend, Machine Washable - Perfect for Spring/Fall, Leisure Style, Conventional Version, Spring/Autumn</h3>
                        <h3 style={{marginTop: "50px", fontSize: "30px"}}><span style={{fontSize: "30px"}}>#</span>250000</h3>
                    </div>

                    <div className="btnwrap">
                        <button className="buttoncont">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailPage