import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';

import {CUSTOMER_SERVICE, ICustomerService} from '../customer.service';
import {ICustomer} from '../customer.model';
import {INavigationService, NAVIGATION_SERVICE} from '../../commons/navigation.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'city', 'country', 'actions'];
  dataSource: MatTableDataSource<ICustomer>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService) {
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.dataSource = new MatTableDataSource<ICustomer>(customers));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToCustomer(customer: ICustomer): Promise<boolean> {
    return this.navigationService.openCustomer(customer._id);
  }

}
