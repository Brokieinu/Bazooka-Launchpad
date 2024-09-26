import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

enum TonNetworkEnum {
  MAINNET = '-239',
  TESTNET = '-3',
}

export class TonNetworkDto {
  @ApiProperty({ enum: TonNetworkEnum, default: TonNetworkEnum.MAINNET })
  @IsEnum(TonNetworkEnum)
  value: keyof typeof TonNetworkEnum;
}