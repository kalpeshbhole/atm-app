import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '@shared/services';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    
    request = request.clone({
      headers: request.headers.set(
        "ngrok-skip-browser-warning", 'true'
      ),
    });

    return next.handle(request).pipe(
      finalize(() => this.loaderService.hide()),
    );
  }
}
