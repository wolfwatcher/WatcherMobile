import {FC} from 'react';
// == Types ==

// === API ===
export type ApiError = {
  status: number;
  message: string;
};

export type AuthResponse = {
  token: string;
  refreshToken: string;
};

// === Components ===
export type GenreItemType = {
  genre: string;
  emoji: string;
};

export type SubscriptionType = {
  id: string;
  component: FC;
};

type TMDBContentType = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export interface TMDBMovieType extends TMDBContentType {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface TMDBSerieType extends TMDBContentType {
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
}

export interface RegisterStepPropsType {
  onNext: () => void;
}

export const AuthError = {
  invalidLogin: {
    apiMessage: 'Invalid login credentials',
    translated: 'Vos indentifiants sont incorrects.',
  },
};
