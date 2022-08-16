import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Styling.css'
import Products from "./components/productsCart.js/Products";
import About from "./components/dashBoard.js/About";
import Home from "./components/dashBoard.js/Home";
import Error from "./components/dashBoard.js/Error";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
    </>
    
  );
}

export default App;
