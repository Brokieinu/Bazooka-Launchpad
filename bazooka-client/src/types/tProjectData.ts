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

export interface TokenDetails {
  uuid: string;
  token_name: string;
  token_symbol: string;
  token_decimal: string;
  token_description: string;
  total_supply: string;
  target_soft_cap: string;
  limit_per_user: number | string;
  total_cap_raised: string;
  liquidity_percentage: string;
  fair_launch_allocation: string;
  project_website_url: string;
  project_telegram_url: string;
  project_twitter_url: string;
  dex_listing: string;
  marketing_team_allocation: string;
  team_member_allocation: string;
  is_approved: boolean;
  is_deleted: boolean;
  presale_contract_address: string | null;
  token_contract_address: string | null;
  start_time: string | null;
  end_time: string | null;
  status: ProjectStatus;
  sale_type: ProjectSale;
  created_at: string;
  updated_at: string;
  token_image: string;
  tokenomics: {
    Team: string;
    Advisors: string;
    'CEX and DEX': string;
    'Presale Allocation': string;
    'Game Utility': string;
    'Community Airdrops': string;
  };
}
