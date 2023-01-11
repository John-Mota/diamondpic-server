
export class NestResponse {
    status: number;
    headers: {};
    body: {};

    constructor(resposta: NestResponse) {
        Object.assign(this, resposta);
    }
}