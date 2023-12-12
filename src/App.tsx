import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomBar from "./components/navbar/NavBar";
import NoPage from "./pages/NoPage";
import Store from "./pages/Store";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./pages/Login";
import './App.css';
import { supabase } from "./client";
import React from "react";
const UserContext = React.createContext({
    user:""
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});



function App() {
    useEffect(()=>{
        const getSession = async () => {

            const { data: { user } } = await supabase.auth.getUser()
            console.log(user)
            setUser(user!.aud)
        }

        getSession()
    }, [])

    const [user, setUser] = useState<string | null>(null);

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        async function login(formData : FormData) {
            const eml = formData.get("email") === null ? "" : formData.get("email")!.toString();
            const pass = formData.get("password") === null ? "": formData.get("password")!.toString();

            const { data, error } = await supabase.auth.signInWithPassword(
                {
                    email: eml,
                    password: pass,
                }
            )
            
            return data
        }
        const {user, session} = await login(data);
        if (user !== null){
            setUser(user?.id)
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            
            {
            user ? <Home></Home> : <Login handleSubmit={handleSubmit}/>

            }
            
            </ThemeProvider>
    );
}

export default App;
