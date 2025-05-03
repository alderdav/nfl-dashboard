import './playerstats.css'
import { useEffect, useState } from "react";
import { PlayerProfile } from "../../interfaces/PlayerProfile";

interface Props {
    playerId: string;
}

export default function PlayerStats({playerId}: Props) {
    const [playerStats, setPlayerStats] = useState<PlayerProfile>()
    
    useEffect(() => {
        fetch(`http://localhost:3000/player/${playerId}/player_profile`)
        .then(response => {
            response.json()
            .then((playerProfile: PlayerProfile) => {
                setPlayerStats(playerProfile);
            })
        })
        
    }, [])
    
    return (
        <>
            <p>Name: {playerStats?.displayName}</p>
            <p>position: {playerStats?.position}</p>
            <p>College: {playerStats?.college_name}</p>
            {/* <img className="__player-image" src={playerStats?.headshot} /> */}
            <p>Draft: {playerStats?.draft}</p>
            {/* Find a way to toggle visibility for games and seasons */}
            {/* Create a way to specialize data being shown in gaem tables by position */}
            {playerStats?.stats.map((seasonStats, idx) => (
                <div>
                    <p>{seasonStats.season}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Week</th>
                                <th>Opponent</th>
                                <th>Fantasy Points</th>
                            </tr>
                        </thead>
                        {seasonStats.stats.map(game => (
                        <tr>
                            <td>{game.week}</td>
                            <td>{game.opponent}</td>
                            <td>{game.fantasy_points}</td>
                        </tr>
                        ))}
                    </table>
                </div>
            ))}
        </>

        
    )
}