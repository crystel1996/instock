import { FC } from "react";
import AES from 'crypto-js/aes';
import Config from './../../Config/config.json'
import { ResendCodeInterface } from "./interface";
import UTF8_ENCODING from 'crypto-js/enc-utf8';

export const ResendCode: FC<ResendCodeInterface> = () => {

    let params = new URLSearchParams(document.location.search)

    return <>{AES.decrypt(params.get('e') ?? '', Config.SECRET_KEY_HMAC).toString(UTF8_ENCODING)}</>
}