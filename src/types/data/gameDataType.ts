export type GameApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: GameResultType[];
}

export type GameResultType = {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Record<string, unknown>;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: Record<string, unknown>;
    metacritic: number | null;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: EsrbRating | null;
    platforms: Platform[];
}

export type EsrbRating = {
    id: number;
    slug: string;
    name: string;
}

export type Platform = {
    platform: PlatformInfo;
    released_at: string | null;
    requirements: Requirements | null;
}

export type PlatformInfo = {
    id: number;
    slug: string;
    name: string;
}

export type Requirements = {
    minimum: string | null;
    recommended: string | null;
}