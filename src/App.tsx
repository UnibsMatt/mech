import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CustomBar from "./components/navbar/NavBar";
import NoPage from "./pages/NoPage";
import Store from "./pages/Store";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./pages/Login";
import './App.css';
import {supabase} from "./client";
import Button from "@mui/material/Button";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


async function login() {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: 'gianni@sperti.com',
        password: 'masdmasd',
    })
    console.log(data)
    return data

}

function App() {

    const [user, setUser] = useState("");

    useEffect(() => {
            const fetchUser = async () => {
                const {user, session} = await login()
                if (user !== null) {
                    setUser(user.email != null ? user.email : "");
                }
            }

            fetchUser();


        },
        []
    )


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Button onClick={login}> Press me {user}</Button>
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
