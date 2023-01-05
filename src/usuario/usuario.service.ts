import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
    
    
   

    private usuarios: Array<Usuario> = [{

        id: 1,
        nomeDeUsuario: 'john',
        email: 'johnmota@diamond.com',
        senha: '123456',
        nomeCompleto: 'John Mota',
        dataDeHoje: new Date()
    }]

 
    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);

        return usuario;
    }

    public buscarPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
    }
}