import { StateOrder } from '../enums/state-order';
import { Client } from '../models/client';

export interface OrderI {
  id: number;
  client: Client;
  type_presta: string;
  designation: string;
  nb_days: number;
  unit_price: number;
  state: StateOrder;
}
