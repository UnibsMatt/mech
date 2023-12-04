import {Grid} from '@mui/material';
import React from 'react';

import Item from "../components/item/Items";
function Home() {
    return (
        <div className="home">

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item/>
                </Grid>
                <Grid item xs={6}>


                </Grid>
            </Grid>

        </div>
    );
}

export default Home;