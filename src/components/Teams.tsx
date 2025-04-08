import { useEffect, useState } from "react";
import TeamTile from "./TeamTile";
import { Team } from "../interfaces/Team";
import './teams.css';

interface TeamsProps {
    season: number;
}

export default function Teams({season}: TeamsProps) {
    if(season === null) return null;
    const [teams, setTeams] = useState<Team[]>();

    useEffect(() => {
        fetch(`http://localhost:3000/season/${season}/teams/all-teams`)
        .then(response => {
        response.json()
            .then(teams => {
                setTeams(teams);
            })
        })
    }, [season]);

    return(
        <div className="container">
            {teams?.map((team, idx) => 
                <TeamTile name={team.fullName} team={team.team} logo={team.team_logo} division={team.division} colors={team.colors}  conference={team.conference} key={idx} />
            )}
        </div>
    )
}