import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
import { NestResponseBuild } from "../core/http/nest-response-build";
import { NestResponse } from "../core/http/nest-response";
import { STATUS_CODES } from "http";

@Controller('users')
export class UsuarioController {
    

    constructor(private usuarioService: UsuarioService){}

    @Get(':nomeDeUsuario')
    public buscarPorNomeDeUsuario(@Param('nomeDeUsuario')nomeDeUsuario: string){
        const usuarioEncontrado = this.usuarioService.buscarPorNomeDeUsuario(nomeDeUsuario);

        if(!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado'
            });
             
        }

        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario ): NestResponse {
        const usuarioCriado = this.usuarioService.cria(usuario);
        return new NestResponseBuild()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${usuarioCriado.nomeDeUsuario}`
            })
            .comBody(usuarioCriado)
            .build();
       
        // res.status(HttpStatus.CREATED)
        //.location(`/users/${usuarioCriado.nomeDeUsuario}`)
        //.json(usuarioCriado)
       // return usuarioCriado;
    }
}