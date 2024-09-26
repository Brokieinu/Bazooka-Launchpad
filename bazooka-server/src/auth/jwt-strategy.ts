import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EnvironmentConfigService } from 'src/infrastructure/environment-config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly environmentConfigService: EnvironmentConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: async (request, rawJwtToken, done) => {
        const secret = environmentConfigService.getJwtSecret();
        done(null, secret);
      },
    });
  }

  async validate(payload: any) {}
}
