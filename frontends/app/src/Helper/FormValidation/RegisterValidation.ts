import { RegisterInputInterface } from "../../Component";

export class RegisterValidation {
    input: RegisterInputInterface | undefined = undefined;
    constructor(input: RegisterInputInterface) {
        this.input = input;
    }

    isUsernameValid() {
        if (this.input?.userName) {
            return true;
        }

        return false;
    }

    isValidEmail() {
        if(this.input?.email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return this.input.email.match(emailRegex);
        }
        return false;

    }

    isValidPassword(typeValidation: 'LENGTH' | 'NOT_NULL' | 'CONFIRM_PASSWORD') {

        switch(typeValidation) {
            case 'NOT_NULL': 
                if (this.input?.password) {
                    return true
                }
                return false;
            case 'LENGTH':
                if ((this.input?.password?.trim()?.length || 0) >= 10) {
                    return true;
                }
                return false;
            case 'CONFIRM_PASSWORD':
                if ((this.input?.password && this.input?.password === this.input?.confirmPassword)) {
                    return true;
                }
                return false;
        }

    }

    checkRegisterValidity() {
        if(!this.isValidEmail()) {
            return {
                isValid: false,
                message: "Vous devez saisir une adresse email valide." 
            }
        }
        if(!this.isUsernameValid()) {
            return {
                isValid: false,
                message: "Vous devez saisir votre nom valide." 
            }
        }
        if(!this.isValidPassword('NOT_NULL')) {
            return {
                isValid: false,
                message: "Vous devez saisir une mot de passe." 
            }
        }
        if(!this.isValidPassword('LENGTH')) {
            return {
                isValid: false,
                message: "Vous devez saisir une mot de passe au moins 10 charactères." 
            }
        }
        if(!this.isValidPassword('CONFIRM_PASSWORD')) {
            return {
                isValid: false,
                message: "Votre confirmation du mot de passe est incorrecte." 
            }
        }
        return {
            isValid: true,
            message: ''
        }
    }


}