import {Component, Inject, OnInit} from '@angular/core';
import {ICustomer} from '../customer.model';
import {IOrderService, ORDER_SERVICE} from '../order.service';
import {IPizzaOrder} from '../pizza-order.model';
import {INavigationService, NAVIGATION_SERVICE} from '../../commons/navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  customer: ICustomer;
  pizzasOrders: IPizzaOrder[];
  private customerId: string;


  constructor(@Inject(ORDER_SERVICE) private orderService: IOrderService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService,
              private activatedRoute: ActivatedRoute) {
    this.customerId = this.navigationService.getQueryParam(this.activatedRoute, 'customer');
  }

  ngOnInit() {
    this.orderService.getPizzas().subscribe(pizzas => {
      this.pizzasOrders = pizzas.map(pizza => {
        return {
          pizza,
          quantity: 1
        };
      });
    });

    this.orderService.getCustomer(this.customerId).subscribe(customer => {
      this.customer = customer;
    });
  }

}
