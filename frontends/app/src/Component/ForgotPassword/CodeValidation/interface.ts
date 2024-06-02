import { ForgotPasswordInputInterface } from "../interface";

export interface CodeValidationInterface {
    input: ForgotPasswordInputInterface;
    setInput: (value: React.SetStateAction<ForgotPasswordInputInterface>) => void;
    error: string | undefined;
    setError: (value: React.SetStateAction<string | undefined>) => void;
    onChangeStep: (step: number) => void;
}