import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './component/Layout';
import Navbar from './component/Navbar';
const App = () => {
  return (
    <>
     <Routes>
       <Route path="/" element={<Layout/>}>
       </Route>
     </Routes>
    </>
  )
}

export default App

