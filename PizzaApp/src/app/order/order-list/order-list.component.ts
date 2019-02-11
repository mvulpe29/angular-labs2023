import {Component, Inject, OnInit} from '@angular/core';
import {ICustomer} from '../customer.model';
import {IOrderService, ORDER_SERVICE} from '../order.service';
import {IPizzaOrder} from '../pizza-order.model';
import {INavigationService, NAVIGATION_SERVICE} from '../../commons/navigation.service';
import {ActivatedRoute} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {IOrder} from '../order.model';
import {IPizza} from '../pizza.model';
import {zip} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  customer: ICustomer;
  pizzasOrders: IPizzaOrder[];
  orderForm: FormGroup;
  minPrice = 40;
  private customerId: string;

  constructor(@Inject(ORDER_SERVICE) private orderService: IOrderService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.customerId = this.navigationService.getQueryParam(this.activatedRoute, 'customer');
    this.orderForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
      }),
      pizzaOrders: [[], [Validators.required, this.priceValidation()]]
    });
  }

  ngOnInit() {
    const pizzasOrdersObservable = this.orderService.getPizzas().pipe(map((pizzas: IPizza[]) => {
      return pizzas.map(pizza => {
        return {
          pizza,
          quantity: 0
        };
      });
    }));

    const customerObservable = this.orderService.getCustomer(this.customerId);

    zip(pizzasOrdersObservable, customerObservable, (pizzaOrders: IPizzaOrder[], customer: ICustomer) => {
      return {
        pizzaOrders, customer
      };
    }).subscribe((order: IOrder) => {
      this.pizzasOrders = order.pizzaOrders;
      this.orderForm.patchValue({
        customer: order.customer
      });
    });

  }

  priceValidation() {
    return (control: AbstractControl): ValidationErrors | any => {
      if (control.value) {
        const totalPrice = control.value.reduce((price, pizzaOrder: IPizzaOrder) => {
          return price + pizzaOrder.quantity * pizzaOrder.pizza.price;
        }, 0);
        if (totalPrice < this.minPrice) {
          return {
            'price-validator': true
          };
        }
      }
      return undefined;
    };
  }

  onSubmit() {
    console.log(this.orderForm);
  }

}
