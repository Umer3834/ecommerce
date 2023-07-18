import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Singlrproduct from "./pages/singlrproduct";
import { Route, Routes } from "react-router-dom";
import Errormessage from "./pages/errormessage";
import Nav from "./components/nav";
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/singleproduct/:id" element={<Singlrproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Errormessage />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App;
