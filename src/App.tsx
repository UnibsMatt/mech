import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CustomBar from "./components/navbar/NavBar";
import NoPage from "./pages/NoPage";
import Store from "./pages/Store";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./pages/Login";
import './App.css';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <BrowserRouter>
                <CustomBar/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="store" element={<Store/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
