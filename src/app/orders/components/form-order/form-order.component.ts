import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  @Output() public submitted: EventEmitter<Order>;
  public states: string[];
  public clients$: Observable<Client[]>;
  public form!: FormGroup;

  constructor(
    private clientsService: ClientsService,
    private formBuilder: FormBuilder
  ) {
    this.submitted = new EventEmitter<Order>();
    this.states = Object.values(StateOrder);
    this.clients$ = this.clientsService.collection$;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type_presta: [this.init.type_presta],
      // client: this.formBuilder.group({
      //   id: [this.init.client.id],
      // }),
      designation: [this.init.designation],
      nb_days: [this.init.nb_days],
      unit_price: [this.init.unit_price],
      state: [this.init.state],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}
