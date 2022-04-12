import React from 'react'
import './App.css'
import Home from './components/Home'
import HtmlDefinition from './components/HtmlDefinition'
import CssDefinition from './components/CssDefinition'
import JsDefinition from './components/JsDefinition'
import { Route, Routes, NavLink } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { color: "orange" };
};

function App() {

  return (
    <div>
      <nav>
        <NavLink to="/home" style={getActiveLinkStyle}>Home</NavLink>
        <NavLink to="/htmldefinition" style={getActiveLinkStyle}>HTML Definition</NavLink>
        <NavLink to="/cssdefinition" style={getActiveLinkStyle}>CSS Definition</NavLink>
        <NavLink to="/jsdefinition" style={getActiveLinkStyle}>JavaScript Definition</NavLink>
      </nav>
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/htmldefinition" element={<HtmlDefinition />} />
       <Route path="/cssdefinition" element={<CssDefinition />} />
       <Route path="/jsdefinition" element={<JsDefinition />} />
     </Routes>
    </div>
  )
}

export default App
