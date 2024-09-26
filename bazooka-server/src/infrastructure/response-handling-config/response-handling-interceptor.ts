import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const statusCode = this.reflector.get<string>(
      'statusCode',
      context.getHandler(),
    );
    return next.handle().pipe(
      map((data) => ({
        status: 'success',
        code: statusCode,
        data: data,
      })),
      catchError((error: HttpException) => {
        if (error instanceof HttpException) {
          throw error;
        }
        return throwError(error);
      }),
    );
  }
}



