import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import ProtectedLayout from "./Layout/ProtectedLayout";
import DefaultLayout from "./Layout/DefaultLayout";
import ProductTable from "./Components/CreateInvoice";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer /> 
        <Navbar />
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/create-invoice" element={<ProductTable />} />
            
          </Route>

          <Route element={<DefaultLayout />}>
            <Route path="/login" element={<Login />} /> {/* Use element instead of Component */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
