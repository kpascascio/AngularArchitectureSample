import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CalendlyInterceptor } from './calendly.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: CalendlyInterceptor, multi: true }
];
