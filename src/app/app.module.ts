import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptors/Interceptor.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class AppModule {}
