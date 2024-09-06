export interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags?: TagsEntity[] | null;
  team?: TeamEntity[] | null;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: Links;
  links_extended?: LinksExtendedEntity[] | null;
  whitepaper: Whitepaper;
  first_data_at: string;
  last_data_at: string;
}
export interface TagsEntity {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}
export interface TeamEntity {
  id: string;
  name: string;
  position: string;
}
export interface Links {
  explorer?: string[] | null;
  facebook?: string[] | null;
  reddit?: string[] | null;
  source_code?: string[] | null;
  website?: string[] | null;
  youtube?: string[] | null;
}
export interface LinksExtendedEntity {
  url: string;
  type: string;
  stats?: Stats | null;
}
export interface Stats {
  subscribers?: number | null;
  contributors?: number | null;
  stars?: number | null;
  followers?: number | null;
}
export interface Whitepaper {
  link: string;
  thumbnail: string;
}
