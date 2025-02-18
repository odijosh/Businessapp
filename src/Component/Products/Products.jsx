import React from "react";
import pixs from "../../assets/girlshoe1.jpg"
import pic1 from "../../assets/addidas.png"
import pic2 from "../../assets/nike1.png"
import pic3 from "../../assets/gucci1.png"
import pic4 from "../../assets/mercell1.png"
import pic5 from "../../assets/puma1.png"
import "./Products.css";

function Products (){
  
  return (
    <div className= "product-container" >
        <h1 style={{marginLeft: "45%"}}>BEST SELLERS</h1> 
       
      <div className="containerwrapper">
      
        <div className="productwrapper">
          <div className="box1">
            <img
              src={pixs}
              style={{ width: "100%", height: "260px" }}
              alt=""
            />
            <div className="info">
              <h2 className="product-title">iiiiiiiiiiiiiiiiiiiii</h2>
              <h4 className="product-price">#20,000</h4>
            </div>

            <div className="buttonwrapper">
              <button
              
                className="btn"
              >
                Add To Cart
              </button>
            </div>
          </div> 
        </div>
      </div>

      <div className="btnwrap">
        <button className="btnwrapper">Shop All Products</button>
      </div>

      <h3 style={{marginLeft: "44%", marginTop: "160px", color: "gray"}}>TRUSTED PARTNERS</h3>

      <div className="picwrap">

        
        <img src={pic1} alt="" style={{width: "10%", height: "10%"}}/>
        <img src={pic2} alt="" style={{width: "10%", height: "10%"}}/>
        <img src={pic3} alt="" style={{width: "10%", height: "10%"}}/>
        <img src={pic4} alt="" style={{width: "10%", height: "10%"}}/>
        <img src={pic5} alt="" style={{width: "10%", height: "10%"}}/>
        
      </div>
    </div>
  );
};

export default Products;
