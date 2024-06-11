import *  as mailgun from 'mailgun-js';
import { SendEmailInterface } from './interface';

export class EmailService {

    mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

    async sendEmail(data: SendEmailInterface) {     

        const result = await this.mg.messages().send({
            ...data,
            'h:X-Mailgun-Variables': JSON.stringify(data.variables),
            from: process.env.MAILGUN_FROM
        });

        if (result?.id) {
            return true;
        }

        return false;

    }

}