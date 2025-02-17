import Homepage from "./Pages/Homepage"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection"
import Login from "./Pages/Login/Login"
import Details from "./Pages/Details"
import SignUpPage from "./Pages/SignUpPage/SignUpPage"



function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUpPage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
      <Route path="/home" element={<Homepage/>}></Route>
      <Route path="/detail" element={<Details/>}></Route>
      <Route path="/women" element={<Collection/>}></Route>
    </Routes>
    
    
    </BrowserRouter>

  )

  
}

export default App