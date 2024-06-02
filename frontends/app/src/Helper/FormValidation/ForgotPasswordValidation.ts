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

    checkCodeValidation() {
        if(this.input?.code) {
            return {
                isValid: true,
                message: ''
            }
        }

        return {
            isValid: false,
            message: 'Veuillez saisir le code de validation.'
        }

    }

    checkResetPassword() {
        if(!this.input?.password) {
            return {
                isValid: false,
                message: 'Vous devez saisir un mot de passe'
            }
        }

        if(this.input.password.trim().length < 10) {
            return {
                isValid: false,
                message: "Vouz devew choisir un mot depasse au moins 10 charactères."
            }
        }


        if (this.input.password !== this.input.confirmPassword) {
            return {
                isValid: false,
                message: "Votre confirmation n'est pas identique à votre mot de passe."
            }
        }

        return {
            isValid: true,
            message: ""
        }

    }

}