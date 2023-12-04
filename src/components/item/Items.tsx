import React from 'react';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import "./Items.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Items() {
    return (
        <div>
            <Card sx={{minHeight: 275}}>
                <CardContent>
                    <Box className={"g"}>
                        <Typography>
                            ciao
                        </Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                    </Box>

                </CardContent>
                <CardActions>
                    <Button size="large">Aggiungi pezzo</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Items;