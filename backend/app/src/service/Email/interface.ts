export interface SendEmailInterface {
    to: string;
    subject: string;
    template: string;
    variables?: {[key: string]: string}
}