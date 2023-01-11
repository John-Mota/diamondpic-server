import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltrodeExecaoHttp } from './common/filtro/filtro-de-execao-http.filter';
import { UsuarioModule } from './usuario/usuario.module';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta.interceptor'

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltrodeExecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor
    }
  ],
})
export class AppModule {}
