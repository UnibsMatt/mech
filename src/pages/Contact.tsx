import React, {useEffect, useState} from 'react';
import {supabase} from "../client";
import Teams from "../components/teams/teams";
import Container from "@mui/material/Container";
import "./teams.css";

type Users = {
    name: string
}
type ResponseTeams = {
    name: string
    users: Users[]
}

function Contact() {
    const [teams, setTeams] = useState<ResponseTeams[] | null>(null);
    useEffect(() => {
        supabase.from("teams").select("name, users (name)").then(({data}) => {
            console.log(data)
            setTeams(data)
        })
    }, [])

    return (
        <Container className={"card-container"}>
            {
                !teams ? <h1> No items</h1> : teams?.map(x => {
                    return <Teams name={x.name} users={x.users}/>

                })
            }

        </Container>
    );
}

export default Contact;