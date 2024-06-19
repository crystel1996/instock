import { ProfileValidationInputInterface } from "../../Component/ProfileValidation";

export class ValidateUserProfileValidation {
    input: ProfileValidationInputInterface | undefined;

    constructor(input: ProfileValidationInputInterface) {
        this.input = input;
    }

    isValidUser() {
        if (!this.input?.idUser) {
            return false;
        }
        return true;
    }

    isValidCode() {
        if (!this.input?.code) {
            return false;
        }
        return true;
    }

    isValid() {
        if (!this.isValidCode()) {
            return {
                message: "Veuillez saisir le code.",
                isValid: false
            }
        }
        if (!this.isValidUser()) {
            return {
                message: "Identifiant inconnue.",
                isValid: false
            }
        }

        return {
            isValid: true,
            message: ""
        }
    }

}