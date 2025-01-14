import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from './service/loading.service';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {

  constructor(private progressBarService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progressBarService.show();
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.progressBarService.hide();
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            this.progressBarService.hide();
          }
        }
      )
    );
  }
}
