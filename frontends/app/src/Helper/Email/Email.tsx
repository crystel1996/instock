import { EmailConstructorInterface } from "./interface";

export class Email {
    input: EmailConstructorInterface | undefined = undefined;
    constructor(input: EmailConstructorInterface) {
        this.input = input;
    }

    async send () {
        return {
            success: true,
            message: 'Le code a été renvoyé'
        }
    }
}