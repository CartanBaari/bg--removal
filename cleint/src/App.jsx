import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
