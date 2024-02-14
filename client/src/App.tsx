import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
