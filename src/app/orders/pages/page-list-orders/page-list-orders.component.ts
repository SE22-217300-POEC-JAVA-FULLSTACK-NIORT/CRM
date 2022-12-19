import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public collection$!: Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Type',
      'Déscription',
      'Jours',
      'Prix',
      'total HT',
      'total TTC',
      'state',
    ];
  }
}
