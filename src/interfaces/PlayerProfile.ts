import { SeasonStats } from "./SeasonStats";

export interface PlayerProfile {
    gsis_id: string;
    displayName: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    position: string;
    height: number;
    weight: number;
    headshot: string;
    college_name: string;
    rookieSeason: number;
    lastSeason: number;
    lastTeam: string;
    years: number;
    draft: number;
    pick: number;
    draftTeam: string;
    number: number;
    round: number;
    stats: SeasonStats[];
}