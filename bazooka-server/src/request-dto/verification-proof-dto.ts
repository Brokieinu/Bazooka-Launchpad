import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';


class TonDomainDto{
    @IsNumber()
    lengthBytes:number

    @IsString()
    value:string;
}


export class VerifcaionProofDto{
  @ApiProperty({type:()=> TonDomainDto})
  domain:TonDomainDto;

  @ApiProperty({example:'payload_data_here'})
  @IsString()
  payload:string

  @ApiProperty({example: 'signature_here'})
  @IsString()
  signature:string

  @ApiProperty({example: "state_init_here"})
  @IsString()
  state_init: string

  @ApiProperty({example: 1677721600})
  @IsNumber()
  timestamp:number
}

