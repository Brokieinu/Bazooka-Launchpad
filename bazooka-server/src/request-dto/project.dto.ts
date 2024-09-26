import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ProjectSale } from 'src/entities/projects.entity';

export enum ProjectStatus {
  WAITING_TO_START = 'waiting_to_start',
  PRESALE_ONGOING = 'presale_ongoing',
  PRESALE_ENDED = 'presale_ended',
  CLAIM_AVAILABLE = 'claim_available',
}

export class ProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token_symbol: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token_image: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token_banner_image: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  token_decimal: number;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token_description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  total_supply: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  target_soft_cap: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  limit_per_user: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  liquidity_percentage: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fair_launch_allocation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dex_listing: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  total_cap_raised: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  marketing_team_allocation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  team_member_allocation: string;

  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  is_approved: boolean;

  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  is_deleted: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  presale_contract_address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token_contract_address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  project_website_url: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  project_telegram_url: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  project_twitter_url: string;

  @ApiProperty()
  @IsNotEmpty()
  start_time: any;

  @ApiProperty()
  @IsNotEmpty()
  end_time: any;

  @ApiProperty({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.WAITING_TO_START,
  })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status: ProjectStatus;


  @ApiProperty({
    type: 'enum',
    enum: ProjectSale,
    default: ProjectSale.PUBLIC,
  })
  @IsOptional()
  @IsEnum(ProjectSale)
  sale_type: ProjectSale;
}
