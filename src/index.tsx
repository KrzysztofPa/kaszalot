import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Routing} from "./services/Routing";
import {Login} from './Pages/Login/Login';
import {Main} from "./Pages/Main/Main";
import {Contact} from "./Pages/Contact/Contact";
import {Shop} from "./Pages/Shop/Shop";
import {PageTemplate} from "./Components/PageTemplate/PageTemplate";
import {Product} from './Pages/Product/Product';
import {Add} from "./Pages/Add/Add";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path={Routing.main} element={<PageTemplate Element={<Main/>}/>}/>
            <Route path={Routing.contact} element={<PageTemplate Element={<Contact/>}/>}/>
            <Route path={Routing.shop} element={<PageTemplate Element={<Shop/>}/>}/>
            <Route path={Routing.product} element={<PageTemplate Element={<Product/>}/>}/>
            <Route path={Routing.add} element={<PageTemplate Element={<Add/>}/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export const baseUrl = 'http://localhost:3005'