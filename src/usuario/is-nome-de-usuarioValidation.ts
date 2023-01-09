import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "./usuario.service";


@Injectable()
@ValidatorConstraint()
export class IsNomedeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private usuarioService: UsuarioService){}

    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
       return !!!this.usuarioService.buscarPorNomeDeUsuario(nomeDeUsuario);
    }
}

export function IsNomedeUsuarioUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsNomedeUsuarioUnicoConstraint,
      });
    };
}