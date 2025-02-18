import React from "react";
import Header from "../Component/Header/Header"
import DisplayPage from "../Component/DisplayPage/DisplayPage";
import Products from "../Component/Products/Products";
import Footer from "../Component/Footer/Footer";



function Homepage(){
    return(
        <>

      <div>
        <Header/>

        
        <DisplayPage/>
      
        <div style={{width: "100%", marginTop: "40%"}}> 
        
        <Products/>
        </div>

        
        <Footer/>

        </div>
        </>


    )
}

export default Homepage