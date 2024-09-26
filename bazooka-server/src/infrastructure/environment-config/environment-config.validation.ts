import { Transform, plainToClass } from '@nestjs/class-transformer';
import {
  IsBoolean,
  IsString,
  IsNumber,
  IsEnum,
  validateSync,
} from '@nestjs/class-validator';

enum Environment {
  Production = 'production',
  Staging = 'staging',
  Test = 'test',
  Local = 'local',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  DB_CONNECTION_URL;

  @IsString()
  JWT_SECRET;

  @IsString()
  JWT_EXPIRY;

  @IsString()
  PINATA_API_KEY;

  @IsString()
  PINATA_SECRET_API_KEY;

  @IsString()
  PINATA_GATEWAY_URL;

  @IsString()
  WEB3_PROVIDER_URL;

  @IsString()
  CLIENT_API_KEY;

  @IsString()
  CLIENT_ID;

  @IsString()
  ADMIN_ID;

  @IsString()
  ADMIN_API_KEY;

  @IsString()
  TON_ENV;

  @IsString()
  TON_SHARED_SECRET;
  
  @IsString()
  TON_DOMAIN;

  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  TON_PAYLOAD_TTL;

  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  TON_PROOF_TTL


}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  console.log(validatedConfig)
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
