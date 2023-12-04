import React, {useState} from 'react';
import Box from "@mui/material/Box";

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {Grid, TableBody, TableHead, TableRow, TextField} from "@mui/material";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Store() {
    const [righe, settaRighe] = useState(rows);
    const handleChange = (filter: string) => {
        if (filter === "") {
            settaRighe(rows)
            return
        }
        console.log(filter)
        const filtered = rows.filter(r => {
            return r.name.includes(filter)
        })
        settaRighe(filtered)
    }

    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Box sx={{display: 'flex', padding: '10px'}}>
                        <TableContainer component={Paper} sx={{borderRadius: "10px"}}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {righe.length === 0 ?
                                        <h2>
                                            Nessun risultato
                                        </h2> :
                                        righe.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>


                </Grid>

                <Grid>
                    <Box sx={{display: 'flex', alignItems: 'flex-top'}}>
                        <TextField id="search" label="Filtro" variant="standard" onChange={(e) => {
                            handleChange(e.target.value)
                        }}/>
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
        ;
}

export default Store;