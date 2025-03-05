export type PlatformApiResponse = {
  count: number;
  results: PlatformResultType[];
  next?: string;
  previous?: string;
};

export type PlatformResultType = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: string;
  year_start?: number;
  year_end?: number;
};
