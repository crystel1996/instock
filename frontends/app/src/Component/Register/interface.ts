export interface RegisterComponentInterface {
    onSubmit: (input: RegisterInputInterface) => void;
    error?: string;
    loading: boolean;
}

export interface RegisterInputInterface {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}