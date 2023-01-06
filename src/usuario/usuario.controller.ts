import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {
    usuarioSevice: any;

    constructor(private usuarioService: UsuarioService){}

    @Get(':nomeDeUsuario')
    public buscarPorNomeDeUsuario(@Param('nomeDeUsuario')nomeDeUsuario: string){
        const usuarioEncontrado = this.usuarioService.buscarPorNomeDeUsuario(nomeDeUsuario);

        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario ): Usuario {
        throw new Error('Erro de cadastro de usuário')
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }
}