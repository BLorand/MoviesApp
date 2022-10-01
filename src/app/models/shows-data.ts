export interface ShowsData {
    show: {
        id: number,
        name: string,
        language: string,
        genres: Array<string>,
        status: string,
        runtime: number,
        rating: {
            average: number
        },
        image: {
            medium: string;
            original: string;
        },
        summary: string,
        network: {
            name: string
        }
    }
}