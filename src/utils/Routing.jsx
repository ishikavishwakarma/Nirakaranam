import React from 'react'
import { Route, Routes } from "react-router-dom";

import Hometop from '../components/Hometop';
import Training from '../components/Training';
import Bussinesspage from '../components/Bussinesspage';
import Traineevideo from '../components/Traineevideo';
import Registertraine from '../components/Registertraine';
import Logintraine from '../components/Logintraine';
import Enterpreneur from '../components/Enterpreneur';
import Contact from '../components/Contact';

const Routing = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Hometop/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/training/welders" element={<Traineevideo/>}/>
        <Route path="/training/agri" element={<Traineevideo/>}/>
        <Route path="/training/graphics" element={<Traineevideo/>}/>
        <Route path="/business" element={<Bussinesspage/>}/>
        <Route path="/network" element={<Enterpreneur/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path="/register" element={<Registertraine/>}/>
        <Route path="/login" element={<Logintraine/>}/>
        </Routes>
    </div>
  )
}

export default Routing