import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService {
  constructor(private readonly configSerivce: ConfigService) {}
  getDbConnectionUrl() {
    return this.configSerivce.get<string>('DB_CONNECTION_URL');
  }

  getWeb3ProviderUrl() {
    return this.configSerivce.get<string>('WEB3_PROVIDER_URL');
  }
 
  getJwtSecret() {
    return this.configSerivce.get<string>('JWT_SECRET');
  }

  getJwtExpiry() {
    return this.configSerivce.get<string>('JWT_EXPIRY');
  }

  getClientID() {
    return this.configSerivce.get<string>('CLIENT_ID');
  }

  getClientAPIKey() {
    return this.configSerivce.get<string>('CLIENT_API_KEY');
  }

  getAdminID() {
    return this.configSerivce.get<string>('ADMIN_ID');
  }

  getAdminAPIKey() {
    return this.configSerivce.get<string>('ADMIN_API_KEY');
  }

  getPinataApiKey() {
    return this.configSerivce.get<string>('PINATA_API_KEY');
  }

  getPinataSecretApiKey() {
    return this.configSerivce.get<string>('PINATA_SECRET_API_KEY');
  }

  getPinataGatewayUrl() {
    return this.configSerivce.get<string>('PINATA_GATEWAY_URL');
  }

  getTonSharedSecret(){
    return this.configSerivce.get<string>('TON_SHARED_SECRET')
  }

  getTonDomain(){
    return this.configSerivce.get<string>('TON_DOMAIN')
  }

  getTonPayloadttl(){
    return this.configSerivce.get<number>('TON_PAYLOAD_TTL')
  }

  getTonProofttl(){
    return this.configSerivce.get<number>('TON_PROOF_TTL')
  }

  getTonEnvironment(){
    return this.configSerivce.get<string>('TON_ENV')
  }

  
}
