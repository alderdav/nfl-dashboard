import { useEffect, useState } from "react"
import Teams from "./components/Teams/Teams";
import NavBar from "./components/NavBar/NavBar";
import RosterModal from "./components/RosterModal/RosterModal";

export default function App() {
  const [season, setSeason] = useState<number>();
  const handleSeason = (season: number) => {
    setSeason(season)
  };

  return (
    <>
      {/* <NavBar handleSeason={handleSeason}/>
      {season !== undefined && <Teams season={season}/>} */}
      <RosterModal team={'ATL'}/>
    </>
  )
}