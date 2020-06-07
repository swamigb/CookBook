export class User {

    constructor(
        public userId: string,
        public email: string,
        // tslint:disable-next-line: variable-name
        private _token: string,
        // tslint:disable-next-line: variable-name
        private _expiresIn: Date,
        public redirect?: boolean
    ) {
       // console.log(userId+'-'+email);
    }
    public get token(): string {
        if (this._token === '' || new Date() > this._expiresIn){
            return null;
        }
        return this._token;
    }

}
