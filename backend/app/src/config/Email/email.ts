import { EMAIL_REGEX } from "./regex";

export class EmailConfig {


    isValidEmail(email : string) {
        return email.match(EMAIL_REGEX)
    }

}