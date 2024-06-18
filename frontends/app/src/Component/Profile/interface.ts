export interface ProfileInterface {
    title: string;
    user: {
        email: string;
        username: string;
        id: string;
    }
    onSubmit: (input: ProfileUserInput) => void;
    error?: string;
}

export interface ProfileUserInput {
    email: string;
    username: string;
    id: string;
}