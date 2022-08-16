import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Products from "./components/productsCart.js/Products";
import About from "./components/dashBoard.js/About";
import Home from "./components/dashBoard.js/Home";
import Error from "./components/dashBoard.js/Error";

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/products" element={<Products/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </>
    
  );
}

export default App;
