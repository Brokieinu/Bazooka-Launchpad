import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter,LoggingInterceptor,EnvironmentConfigModule,EnvironmentConfigService,TypeOrmConfigModule } from './infrastructure';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER,APP_INTERCEPTOR } from '@nestjs/core';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [
    EnvironmentConfigModule,
    TypeOrmConfigModule,
    AuthModule,
    ProjectModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    EnvironmentConfigService,
    {
      provide:APP_FILTER,
      useClass:HttpExceptionFilter,
    },
    {
      provide:APP_INTERCEPTOR,
      useClass:LoggingInterceptor
    }
  
  ],
})
export class AppModule {}
