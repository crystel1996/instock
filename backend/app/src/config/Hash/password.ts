import * as bcrypt from 'bcrypt';

export class HashPassword {

    _saltOrRounds = 10;

    async hashed(password: string) {
        const hash = await bcrypt.hash(password, this._saltOrRounds);
        return hash;
    }

    async compare(password: string, hash: string) {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }


}