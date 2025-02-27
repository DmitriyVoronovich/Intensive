export type GenreApiResponse = {
    count: number;
    results: GenreResultType[];
    next?: string;
    previous?: string;
}

export type GenreResultType = {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string
}