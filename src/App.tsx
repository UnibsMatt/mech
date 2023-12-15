import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./pages/Login";
import './App.css';
import {User} from "@supabase/supabase-js";
import {supabase} from "./client";
import Dashboard from "./pages/Dashboard";

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});


function App() {
    const [user, setUser] = useState<null | User>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log("Start get user")
        supabase.auth.getUser().then(({data: {user}}) => {
            setUser(user)
            setLoading(false)
        })
    }, [loading])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const eml = data.get("email") === null ? "" : data.get("email")!.toString();
        const pass = data.get("password") === null ? "" : data.get("password")!.toString();

        supabase.auth.signInWithPassword(
            {
                email: eml,
                password: pass,
            }
        ).then(({data: {user, session}}) => {
            setUser(user)
            setLoading(false)
        })
    };

    return (
        <div>
            <ThemeProvider theme={darkTheme}>

                <CssBaseline/>

                {
                    user ? <Dashboard/> : <Login handleSubmit={handleSubmit}/>
                }

            </ThemeProvider>
        </div>
    );
}


export default App;
