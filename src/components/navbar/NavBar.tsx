import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BuildIcon from '@mui/icons-material/Build';
import Typography from '@mui/material/Typography';

import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function CustomBar(): JSX.Element {
    const navigate = useNavigate();

    function handleRoute(item: string): void {
        navigate(item)

    }

    const navItems = ['home', 'store', 'contact'];
    return (
        <AppBar position="static">
            <Toolbar>
                <BuildIcon></BuildIcon>
                <Typography
                    variant="h3"
                    noWrap
                    component="a"
                    href="/"
                    sx={{

                        mr: 2,
                        fontWeight: 200,
                        fontFamily: 'verdana',
                        color: 'white',
                        letterSpacing: '.2rem',
                        textDecoration: 'none',
                    }}
                >MechStore
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}} justifyContent="center" alignItems="center">
                    {navItems.map((item) => (
                        <Button key={item} sx={{color: '#fff', fontSize: '18px'}} onClick={() => {
                            handleRoute(item)
                        }
                        }>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default CustomBar;