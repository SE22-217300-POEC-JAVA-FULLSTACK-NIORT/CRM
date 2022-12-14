import { StateClient } from '../enums/state-client';

export interface ClientI {
  id: number;
  company_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  address: string;
  zip_code: string;
  city: string;
  country: string;
  state: StateClient;
}
