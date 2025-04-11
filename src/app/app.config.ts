import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CoreModule } from '../@core/core.module';

export const appConfig: ApplicationConfig = {
  providers: [
    ...CoreModule.forRoot().providers!,
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
  ]
};
