import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendlyKey } from '../../config/keys';

@Injectable()
export class CalendlyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if this isn't the calendly request being sent, don't do anything to the request
        if (!req.url.includes('calendly')) { return next.handle(req); }

        const tokenHeader = req.clone({ headers: req.headers.set('X-Token', CalendlyKey.key)});
        return next.handle(tokenHeader);
    }
}
