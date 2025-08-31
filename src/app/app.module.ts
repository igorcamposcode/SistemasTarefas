import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor as any, // Corrigido para garantir compatibilidade de tipo
      multi: true
    },
  ],
})
export class AppModule {}
