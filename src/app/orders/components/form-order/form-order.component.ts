import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  @Input() public init!: Order;
  public states: string[];
  public clients$: Observable<Client[]>;

  constructor(private clientsService: ClientsService) {
    this.states = Object.values(StateOrder);
    this.clients$ = this.clientsService.collection$;
  }
}
