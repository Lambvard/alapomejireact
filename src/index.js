import React from 'react';
import ReactDOM from 'react-dom/client'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./Home";
import create from "./pages/create";
import buy from "./pages/buy";
import lease from "./pages/lease";
import reportWebVitals from './reportWebVitals';
<link href='<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <BrowserRouter>
        <Routes>
       
        
        <Route element={<Home/>}/>
        <Route path="create" element={<create/>} />
        <Route path="buy" element={<buy/>}/>
        <Route path="lease" element={<lease/>}/>
       
      
        </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
