export type GameApiResponse = {
  count: number;
  results: GameResultType[];
  next?: string;
  previous?: string;
};

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
  playtime: number;
  suggestions_count: number;
  updated: string;
  platforms: Platform[];
  genres?: Genres[];
  esrb_rating?: EsrbRating;
  metacritic?: number;
};

export type Genres = {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
};

export type EsrbRating = {
  id: number;
  slug: string;
  name: string;
};

export type Platform = {
  platform: PlatformInfo;
  released_at?: string;
  requirements?: Requirements;
};

export type PlatformInfo = {
  id: number;
  slug: string;
  name: string;
};

export type Requirements = {
  minimum?: string;
  recommended?: string;
};

export type GameDetails = {
  id: number,
  slug: string,
  name: string,
  name_original: string,
  description_raw: string,
  rating: number;
  released: string,
  updated: string,
  background_image: string,
  background_image_additional: string,
  website: string,
  suggestions_count: 0,
  platforms: Platform[],
  playtime: string,
  reddit_url: string,
  genres?: Genres[];
}