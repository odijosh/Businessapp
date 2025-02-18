import React from "react";
import WomenCollection from "../Component/WomenCollection/Womencollection.jsx";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

function Collection() {
  return (
    <>

      <div style={{width: "100%", height: "95vh", display: "flex", flexDirection: "column", gap: "10px"}}>
      <Header />

     
      <WomenCollection />

     <div style={{width: "100%", marginTop: "300px"}}>
      <Footer />
      </div>
      </div>
    </>
  );
}

export default Collection;
