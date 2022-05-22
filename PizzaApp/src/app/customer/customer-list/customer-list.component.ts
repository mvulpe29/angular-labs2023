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
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'city', 'country', 'actions'];
  dataSource: Array<ICustomer>;

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService) {
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.dataSource = customers);
  }

  goToCustomer(customer: ICustomer): Promise<boolean> {
    return this.navigationService.openCustomer(customer._id);
  }

}
