export interface IntercomUser {
  id: string;
  name: string;
  email: string;
  createdAt: number; // Unix timestamp in seconds
}

export interface IntercomConfig {
  app_id: string;
  user_id: string;
  name: string;
  email: string;
  created_at: number;
}
