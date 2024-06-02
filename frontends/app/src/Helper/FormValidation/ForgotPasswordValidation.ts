import { ForgotPasswordInputInterface } from "../../Component";
import { EMAIL_REGEX } from "../Regex";

export class ForgotPasswordValidation {
    input: ForgotPasswordInputInterface | undefined = undefined;
    constructor(input: ForgotPasswordInputInterface) {
        this.input = input;
    }
    checkEmailValidity() {
        if(this.input?.email) {
            if(this.input.email.match(EMAIL_REGEX)) {
                return {
                    isValid: true,
                    message: ''
                }
            }
            return {
                isValid: false,
                message: 'Veuillez entrer une adresse email valide.'
            }
        }
        return {
            isValid: false,
            message: 'Veuillez saisir une adresse email.'
        };
    }
}