import {FC} from 'react';
// == Types ==

export type RegisterStepType = {
  name: keyof RegisterStackParamList;
};

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

// === Navigation ===
// Stack
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RegisterStackParamList = {
  birthdate: undefined;
  'favorite-content': undefined;
  'favorite-genres': undefined;
  'hated-genres': undefined;
  'favorite-movies': undefined;
  'favorite-series': undefined;
  subscriptions: undefined;
  recommendations: undefined;
  personal: undefined;
};

// Params
export type LoginParams = {
  email: string;
  password: string;
};
