export interface ProfileValidationInterface {
    user?: {
        email: string;
        id:string;
    }
}

export interface ProfileValidationInputInterface {
    idUser: string;
    code: string;
}