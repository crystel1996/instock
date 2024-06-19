export interface ProfileInterface {
    title: string;
    user: {
        email: string;
        username: string;
        id: string;
    }
    onSubmit: (input: ProfileUserInput) => void;
    error?: string;
    loading?: boolean;
}

export interface ProfileUserInput {
    email: string;
    username: string;
    id: string;
}