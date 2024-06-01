import { LoginInputInterface } from "../../Component";

export class LoginValidation {
    input: LoginInputInterface | undefined = undefined;
    constructor(input: LoginInputInterface) {
        this.input = input;
    }

    isValidEmail() {
        
        if(this.input?.email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return this.input.email.match(emailRegex);
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