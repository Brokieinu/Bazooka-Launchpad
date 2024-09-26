import { ApiProperty } from '@nestjs/swagger';
import { IsString,IsNotEmpty } from 'class-validator';

export class TonAddressDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string;
}
