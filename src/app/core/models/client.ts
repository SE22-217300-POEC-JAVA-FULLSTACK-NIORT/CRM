import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id!: number;
  company_name!: string;
  first_name!: string;
  last_name!: string;
  email!: string;
  phone!: number;
  address!: string;
  zip_code!: string;
  city!: string;
  country = 'France';
  state = StateClient.ACTIVE;
}
