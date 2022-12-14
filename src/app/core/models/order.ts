import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';
import { Client } from './client';

export class Order implements OrderI {
  id!: number;
  client!: Client;
  type_presta!: string;
  designation!: string;
  nb_days = 5;
  unit_price = 500;
  state = StateOrder.OPTION;
}
