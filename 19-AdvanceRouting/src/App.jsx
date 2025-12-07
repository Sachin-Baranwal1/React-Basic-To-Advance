import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Product from "./Components/Product";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Kids from "./Components/Kids";
import NotFound  from "./Components/NotFound";
import DetailAbout from "./Components/DetailAbout";
import Navbar2 from "./Components/Navbar2";

const App = () => {
  return (
    <div className="">
      <Header />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<DetailAbout />
} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div> 
  );
};

export default App;
