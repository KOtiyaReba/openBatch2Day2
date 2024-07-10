import { useState } from "react";
import "./App.css";
import First from "./components/First";
import Registration from "./components/Registration";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import StateBasics from "./components/StateBasics";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/tab" element={<Tabs/>}/>
        <Route path="/s" element={<StateBasics/>}/>
        <Route path="/c" element={<Counter/>}/>

      </Routes>
    </>
  );
}

export default App;
