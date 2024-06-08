import { EmailConstructorInterface, EmailSendInterface } from "./interface";

export class Email {
    input: EmailConstructorInterface | undefined = undefined;
    constructor(input: EmailConstructorInterface) {
        this.input = input;
    }

    async send (input: EmailSendInterface) {
        return {
            success: true,
            message: `Le code a été envoye sur votre email.`
        }
    }
}