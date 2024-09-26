import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EnvironmentConfigService } from 'src/infrastructure';

@Injectable()
export class PlatformAdminAuthGaurd implements CanActivate {
  constructor(private readonly environmentConfigService: EnvironmentConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const adminApiKey = this.environmentConfigService.getAdminAPIKey()
      const adminId = this.environmentConfigService.getAdminID();


      // Extract api-key and client-id from headers
      const reqApiKey = request.headers['x-api-key'];
      const reqClientId = request.headers['x-client-id'];
      // const client = await this.platformService.findByClientId(clientId);
      return reqApiKey === adminApiKey && reqClientId === adminId;   
    } catch (error) {
      throw new HttpException(
        'Invalid API-KEY or CLIENT-ID',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
