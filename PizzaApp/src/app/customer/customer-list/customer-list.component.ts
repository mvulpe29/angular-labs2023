import {Component, Inject, OnInit} from '@angular/core';

import {CUSTOMER_SERVICE, ICustomerService} from '../customer.service';
import {ICustomer} from '../customer.model';
import {INavigationService, NAVIGATION_SERVICE} from '../../commons/navigation.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Array<ICustomer>;

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService) {
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  goToCustomer(customer: ICustomer): Promise<boolean> {
    return this.navigationService.openCustomer(customer._id);
  }

}
