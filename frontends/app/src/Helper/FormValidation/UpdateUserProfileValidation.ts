import { ProfileUserInput } from "../../Component";
import { EMAIL_REGEX } from "../Regex";

export class UpdateUserProfileValidation {
    input: ProfileUserInput | undefined;

    constructor(input: ProfileUserInput) {
        this.input = input;
    }

    isValidEmail() {
        
        if(this.input?.email) {
            return this.input.email.match(EMAIL_REGEX);
        }
        return false;
    }

    isValidUsername() {
        if(this.input?.username) {
            return true;
        }
        return false;
    }

    isValid() {
        if (!this.isValidUsername()) {
            return {
                message: "Vous devez ajouter un username.",
                isValid: false
            }
        }
        if (!this.isValidEmail()) {
            return {
                message: "Vous devez saisir un email.",
                isValid: false
            }
        }

        return {
            isValid: true,
            message: ''
        }

    }


}