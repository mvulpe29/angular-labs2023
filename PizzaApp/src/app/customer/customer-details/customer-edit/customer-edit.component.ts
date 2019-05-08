import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../../customer.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  public emailFormControl: FormControl;
  public customerFormGroup: FormGroup;

  constructor() {
    this.emailFormControl = new FormControl("", [Validators.required, Validators.email])
    this.customerFormGroup = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: this.emailFormControl,
      phone: new FormControl(""),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        zipCode: new FormControl(),
        country: new FormControl()
      })
    });
  }

  private _customer: ICustomer;

  get customer(): ICustomer {
    return this._customer;
  }

  @Input()
  set customer(customer: ICustomer) {
    this._customer = customer;
    this.customerFormGroup.patchValue(customer);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log({
      ...this.customerFormGroup.value,
      _id: this.customer._id
    });
  }
}
