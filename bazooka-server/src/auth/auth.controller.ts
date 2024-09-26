import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ResponseInterceptor,SetResponseCode} from 'src/infrastructure';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiErrorResponses, ClientAuthGaurd } from 'src/infrastructure/guards';
import { CheckProofPayloadDto, UserLoginDto } from 'src/request-dto';
import { AuthService } from './auth.service';



@ApiErrorResponses()
@ApiTags('Auth')
@ApiSecurity('apiKey')
@ApiSecurity('clientId')
@UseInterceptors(ResponseInterceptor)
@Controller('auth')
export class UserAuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @SetResponseCode(HttpStatus.CREATED)
  @UseGuards(ClientAuthGaurd)
  @Post('login')
  async userLogin(@Body() data:UserLoginDto){
    const token = await this.authService.login(data);
    return token
  }


  @SetResponseCode(HttpStatus.CREATED)
  @UseGuards(ClientAuthGaurd)
  @Post('generate-verification-payload')
  async generateVerificationPayload(){
    const proof = await this.authService.generateVerificationPayload();
    return proof;
  }


  @SetResponseCode(HttpStatus.OK)
  @UseGuards(ClientAuthGaurd)
  @Post('verify_address')
  async verifyWalletAddress(@Body() data:CheckProofPayloadDto){
    const token = await this.authService.checkProof(data);
    return token
  }
 
}
