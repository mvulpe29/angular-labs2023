import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ICustomer} from '../customer.model';
import {CUSTOMER_SERVICE, ICustomerService} from '../customer.service';
import {INavigationService, NAVIGATION_SERVICE} from '../../commons/navigation.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  private customer: ICustomer;

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.customerService.getCustomer(this.navigationService.getParam(this.activatedRoute, 'id'))
      .subscribe(customer => this.customer = customer);
  }

  goBack() {
    return this.navigationService.openCustomers();
  }
}
