import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum ProjectStatus {
  WAITING_TO_START = 'waiting_to_start',
  PRESALE_ONGOING = 'presale_ongoing',
  PRESALE_ENDED = 'presale_ended',
  CLAIM_AVAILABLE = 'claim_available',
}

export enum ProjectSale {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

@Entity()
export class Projects {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
  
  @Column({ nullable: true })
  token_name: string;

  @Column({ nullable: true })
  token_symbol: string;

  @Column({nullable:true})
  token_image:string

  @Column({nullable:true})
  token_decimal:number;

  @Column({nullable:true})
  token_banner_image:string

  @Column({ nullable: true })
  token_description: string;

  @Column({nullable: true})
  total_supply: string;

   @Column({ nullable: true })
  target_soft_cap: string;

   @Column({ nullable: true })
  limit_per_user: string;

   @Column({ nullable: true })
  liquidity_percentage: string;

   @Column({ nullable: true })
  fair_launch_allocation: string;

   @Column({ nullable: true })
  dex_listing: string;

   @Column({ nullable: true })
  marketing_team_allocation: string;

   @Column({ nullable: true })
  team_member_allocation: string;

  //   These ↓↓↓ columns data will be filled by the admin

  @Column({ default: false })
  is_approved: boolean;

  @Column({ default: false })
  is_deleted: boolean;

  @Column({ nullable: true })
  presale_contract_address: string;

  @Column({ nullable: true })
  token_contract_address: string;

  @Column({ nullable: true })
  total_cap_raised: string;

  @Column({ nullable: true })
  project_website_url: string;

  @Column({ nullable: true })
  project_telegram_url: string;

  @Column({ nullable: true })
  project_twitter_url: string;

  @Column('timestamp', { nullable: true })
  start_time: Date;

  @Column('timestamp', { nullable: true })
  end_time: Date;

  @Column({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.WAITING_TO_START,
  })
  status: ProjectStatus;

  @Column({
    type: 'enum',
    enum: ProjectSale,
    default: ProjectSale.PUBLIC,
  })
  sale_type: ProjectSale;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
