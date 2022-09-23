import React from 'react';
import "./App.css";
import "./sb-admin-2.min.css";
import Dashboard from "./components/dashboard";
import Button from './components/button';
import Card from './components/card';
import Color from './components/color';
import Border from './components/border';
import Animation from './components/animation';
import Other from './components/other';
import Login from './components/login';
import Register from './components/register';
import Password from './components/password';
import Error from './components/404';
import Blank from './components/blank';
import Chart from './components/chart';
import Table from './components/table';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/> 
        <Route path="/button" element={<Button />}/> 
        <Route path="/card" element={<Card />}/> 
        <Route path="/color" element={<Color />}/> 
        <Route path="/border" element={<Border />}/>
        <Route path="/animation" element={<Animation />}/> 
        <Route path="/other" element={<Other />}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/> 
        <Route path="/password" element={<Password />}/> 
        <Route path="/404" element={<Error />}/> 
        <Route path="/blank" element={<Blank />}/> 
        <Route path="/chart" element={<Chart />}/> 
        <Route path="/table" element={<Table />}/> 
        
    </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
