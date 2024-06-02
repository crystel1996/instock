import { ForgotPasswordInputInterface } from "../interface";

export interface ResetPasswordInterface {
    input: ForgotPasswordInputInterface;
    setInput: (value: React.SetStateAction<ForgotPasswordInputInterface>) => void;
    error: string | undefined;
    setError: (value: React.SetStateAction<string | undefined>) => void;
}