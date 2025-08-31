import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { pt_PT, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { AuthInterceptor } from './auth.interceptor';

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNzI18n(pt_PT),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideNzIcons(icons),
  ],
};
