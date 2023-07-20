import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import UserImages from "./components/UserImages";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path="/user/:id" element={<UserDetails/>} exact/>
        <Route path="/user/albums/:id" element={<UserImages/>} exact/>
      </Routes>
    </BrowserRouter>
  );
};



export default App;
