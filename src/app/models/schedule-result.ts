import { ShowsData } from "./shows-data";

export interface ScheduleResult {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: Date;
    airtime: string;
    runtime: number;
    rating: number;
    image: string;
    summary: string;
    network?: string;
    _embedded: ShowsData
}