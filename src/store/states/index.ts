export type AuthState = {
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: {
    code: string;
    message: string;
  } | null;
};

export type RegisterStateType = {
  progression: {
    steps: number;
    step: number;
  };
  birthdate?: string;
  favoriteContent: string[];
  favoriteGenres: string[];
  hatedGenres: string[];
  favoriteMovies: number[];
  favoriteSeries: number[];
  subscriptions: string[];
  withRecommendations?: boolean;
};
