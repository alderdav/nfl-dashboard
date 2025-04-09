import { useState, useEffect} from 'react';
import './rostermodal.css'

interface Props {
    team: string;
}

interface Player {
    playerId: string;
    name: string;
    position: string;
}

interface Roster {
    season: number;
    team: string;
    players: Player[];
}

export default function RosterModal({team}: Props) {
    const [roster, setRoster] = useState<Roster>();

    useEffect(() => {
        fetch(`http://localhost:3000/season/2019/team/${team}/roster`)
        .then(response => {
          response.json()
            .then(roster => {
                console.log(roster)
                setRoster(roster)
            })
        })
    }, [])

    return (
        <div className="__roster-modal">
            <h1>{team} Roster:</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Position</th>
                </thead>
                {roster?.players.map((player, idx) => (
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}