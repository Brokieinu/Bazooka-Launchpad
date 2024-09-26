import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/class-transformer';
import { ValidateNested } from 'class-validator';
import { TonAddressDto } from './ton-address.dto';
import { TonNetworkDto } from './ton-network.dto';
import { VerifcaionProofDto } from './verification-proof-dto';

export class CheckProofPayloadDto{
  @ApiProperty({type:()=> TonAddressDto})
  @ValidateNested()
  @Type(()=> TonAddressDto)
  address:TonAddressDto;

  @ApiProperty({type:()=>TonNetworkDto})
  @ValidateNested()
  @Type(()=>TonNetworkDto)
  network:TonNetworkDto;

  @ApiProperty({type:()=> VerifcaionProofDto})
  @ValidateNested()
  @Type(()=>VerifcaionProofDto)
  proof:VerifcaionProofDto;
}
