export interface IProject {
  banner_uri: string;
  discord: string;
  display_name: string;
  img_url: string;
  is_verified: boolean;
  project_slug: string;
  supply: number;
  tensor_slug: string;
  tensor_whitelist: string;
  twitter: string;
  website: string;
}

export interface ICollection {
  collection_id: string;
  floor_price: number;
  project_id: string;
  project: IProject;
}
