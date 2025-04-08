import './teamtile.css'

interface TeamTileProps {
    name: string;
    team: string;
    logo: string;
    division: string;
    conference: string;
    colors: string[];
}

export default function TeamTile({name, team, logo, division, conference, colors}: TeamTileProps) {

    const getTeamInfo = (season: number, team: string) => {
        fetch(`http://localhost:3000/season/${season}/team/${team}/roster`)
        .then(response => {
          response.json()
            .then(roster => {
                console.log(roster)
            })
        })
    }

    return(
        <div className="team-tile __round-corners">
            <div className=" __half">
                <p>{name}</p>
                <p>Conference: {conference}</p>
                <p>Divsion: {division}</p>
                <div className="colors __round-corners __flex-col">
                    <span style={{backgroundColor: colors[0], height: "25%"}}>{colors[0]}</span>
                    <span style={{backgroundColor: colors[1], height: "25%"}}>{colors[1]}</span>
                    <span style={{backgroundColor: colors[2], height: "25%"}}>{colors[2]}</span>
                    <span style={{backgroundColor: colors[3], height: "25%"}}>{colors[3]}</span>
                </div>
            </div>
            <div className="__flex-col __half">
                <img src={logo} />
                <div className="__flex-col">
                    <button onClick={() => getTeamInfo(2019, team)}>Get Roster Info</button>
                    <button>Go To Season</button>
                </div>
            </div>

        </div>
    );
}