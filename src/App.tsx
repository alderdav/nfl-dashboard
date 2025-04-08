import { useEffect, useState } from "react"
import Teams from "./components/Teams";

export default function App() {
  const [seasons, setSeasons] = useState<number[]>();
  const [season, setSeason] = useState<number>();

  useEffect(()=> {
    fetch('http://localhost:3000/season/all-seasons')
      .then(response => {
        response.json()
          .then(seasons => {
              setSeasons(seasons.seasons);
          })
      })
  }, []);

  return (
    <>
      <label htmlFor="season">Choose Season:</label>
      <select id="season" onChange={(e) => setSeason(Number(e.target.value))}>
        {seasons?.map((season, idx) => (
          <option value={season} key={idx}>{season}</option>
        ))}
      </select>
      {season !== undefined && <Teams season={season}/>}
    </>
  )
}