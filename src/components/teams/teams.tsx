import React from 'react';
import Card from "@mui/material/Card";
import {CardContent} from '@mui/material';
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import "./teams.css";

type Users = {
    name: string
}
type props = {
    name: string
    users: Users[]
}

function Teams(prop: props) {


    return (
        <Card className={"card"}>
            <CardContent>
                <h3>
                    {prop.name}
                </h3>
                <ul>
                    {
                        prop.users.map(user => {
                                return <li> {user.name}</li>
                            }
                        )
                    }
                </ul>
            </CardContent>
            <CardActions>
                <Button>
                    Delete
                </Button>

            </CardActions>
        </Card>

    );
}

export default Teams;