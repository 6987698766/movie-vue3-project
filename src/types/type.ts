export interface TmdbVideo {
  name: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  size: number;
}

export interface TmdbGenre {
  id: number;
  name: string;
}

export interface DiscoverTvResponse {
  results: any[];
  total_pages: number;
  total_results: number;
}
