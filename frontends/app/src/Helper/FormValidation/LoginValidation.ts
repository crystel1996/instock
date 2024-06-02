import { LoginInputInterface } from "../../Component";
import { EMAIL_REGEX } from "../Regex";

export class LoginValidation {
    input: LoginInputInterface | undefined = undefined;
    constructor(input: LoginInputInterface) {
        this.input = input;
    }

    isValidEmail() {
        
        if(this.input?.email) {
            return this.input.email.match(EMAIL_REGEX);
        }
        return false;
    }

    isValidPassword() {
        if (this.input?.password) {
            return true;
        }
        return false;
    }

    checkLoginValidity() {

        if (!this.isValidEmail()) {
            return {
                isValid: false,
                message: "Vous devez saisir une adresse email valide."
            }
        }

        if (!this.isValidPassword()) {
            return {
                isValid: false,
                message: "Vous devez saisir une mot de passe."
            }
        }

        return {
            isValid: true,
            message: ''
        }
    }


}