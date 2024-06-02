import { ForgotPasswordInputInterface } from "../interface";

export interface EmailValidationInterface {
    input: ForgotPasswordInputInterface;
    setInput: (value: React.SetStateAction<ForgotPasswordInputInterface>) => void;
}