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
};
