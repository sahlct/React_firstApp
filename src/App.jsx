import React, { createContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Maincart } from "./components/cartpage/maincart";
import { Content } from "./components/homepage/content";
import { Navbar } from "./components/homepage/navbar";
import { Mainproduct } from "./components/productpage/mainproduct";
import { View } from "./components/productpage/view";
import { Address } from "./components/cartpage/address";
import { Invoice } from "./components/cartpage/bill";
import About from "./components/aboutpage/about";
import "./App.css";
import AdminContainer from "./components/adminPage/adminMainC";

export const MyContext = createContext();

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Content />} />
        <Route path="/product" element={<Mainproduct />} />
        <Route path="cart" element={<Maincart />} />
        <Route path="about" element={<About />} />
        <Route path="view/:cardId" element={<View />} />
        <Route path="cart/address" element={<Address />} />
        <Route path="cart/address/invoice" element={<Invoice />} />
        <Route path="cart/bill" element={<Invoice />} />
        <Route path="*" element={<Content />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  const [array, setarray] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [secArray, setSecArray] = useState([]);

  return (
    <MyContext.Provider
      value={{
        cart: array,
        arrkey: setarray,
        cart1: secArray,
        setSecArray: setSecArray,
        selectedOption: selectedOption,
        setSelectedOption: setSelectedOption,
      }}
    >
      <div className="App">
        <div className="containerMain">
          <Routes>
            <Route path="/adminPage" element={<AdminContainer />} />
            <Route path="*" element={<App />} />
          </Routes>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export { AppWrapper };
