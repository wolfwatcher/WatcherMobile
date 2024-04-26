import {Session} from '@supabase/auth-js';

export type AuthState = {
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: {
    code: string;
    message: string;
  } | null;
};

export type SessionState = {
  session: Session | null;
  loading: boolean;
};

export type RegisterStateType = {
  step: number;
  birthdate: string;
  favoriteContent: string[];
  favoriteGenres: string[];
  hatedGenres: string[];
  favoriteMovies: number[];
  favoriteSeries: number[];
  subscriptions: string[];
  onlySubscriptions: boolean;
  withRecommendations: boolean;
};
