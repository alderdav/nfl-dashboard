import { useState, useEffect } from 'react';
import classes from './navbar.module.css';

interface Props {
    handleSeason: (season: number) => void;
}

export default function NavBar({handleSeason}: Props) {
    const [seasons, setSeasons] = useState<number[]>();

    useEffect(()=> {
    fetch('http://localhost:3000/season/all-seasons')
        .then(response => {
        response.json()
            .then(seasons => {
                setSeasons(seasons.seasons);
            })
        })
    }, []);

    return(
        <div className={`${classes.__navbar}`}>
            <label htmlFor="season">Choose Season:</label>
            <select id="season" onChange={(e) => handleSeason(Number(e.target.value))}>
            {seasons?.map((season, idx) => (
                <option value={season} key={idx}>{season}</option>
            ))}
            </select>
        </div>
    )
}