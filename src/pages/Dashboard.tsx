import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CustomBar from "../components/navbar/NavBar";
import Home from "./Home";
import NoPage from "./NoPage";
import Store from "./Store";
import Contact from "./Contact";

function Dashboard() {

    return (
        <BrowserRouter>
            <CustomBar/>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="store" element={<Store/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default Dashboard;