import { Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities';

import { AuthService } from './auth.service';
import {
  EnvironmentConfigModule,
  EnvironmentConfigService,
  ServiceLevelLogger,
} from 'src/infrastructure';
import { UserAuthController } from './auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: async (envConfig: EnvironmentConfigService) => ({
        secret: envConfig.getJwtSecret(),
        signOptions: {
          expiresIn: envConfig.getJwtExpiry(),
        },
      }),
    }),
  ],
  providers: [
    JwtStrategy,
    AuthService
  ],
  controllers: [UserAuthController],
  exports: [AuthService],
})
export class AuthModule {}
