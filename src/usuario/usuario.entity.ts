import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomedeUsuarioUnico } from "./is-nome-de-usuarioValidation";

export class Usuario{
    
    id: number;

    @IsNomedeUsuarioUnico({
        message: 'Nome de usuário deve ser único'
    })
    @IsNotEmpty({
        message: 'Nome de ususario tem que ser preenchido'
    })
    @IsString({
        message:   'Nome de usuário precisa ser string'
    })
    nomeDeUsuario: string;

    @IsEmail({}, {
        message: 'Email precissa ser um endereço de email.'
    })
    email: string;

    @IsNotEmpty({
        message: 'Senha é obrigatória'
    })
    senha: string;

    @IsNotEmpty({
        message: 'Nome completo precisa ser apenas letras'
    })
    nomeCompleto: string;
    dataDeHoje: Date;
}