export interface LoginComponentInterface {
    onSubmit: (input: LoginInputInterface) => void;
    error?: string;
    loading?: boolean;
}

export interface LoginInputInterface {
    email: string;
    password: string;
    rememberMe: boolean;
}