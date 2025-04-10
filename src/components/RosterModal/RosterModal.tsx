import { useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import './rostermodal.css'

interface Props {
    team: string;
    handleClose: () => void;
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

export default function RosterModal({team, handleClose}: Props) {
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

    return createPortal(
        <>
            <div className="__overlay" />
            <div className="__roster-modal">
                <button onClick={handleClose}>Close</button>
                <h1>{team} Roster:</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roster?.players.map((player, idx) => (
                            <tr key={idx}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>,
        document.getElementById("portal")!
    )
}