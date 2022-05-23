import {Component, Inject, Input, OnInit} from '@angular/core';
import {ICustomer} from '../../customer.model';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {CustomerValidators} from '../../customer-validators';
import {CUSTOMER_SERVICE, ICustomerService} from '../../customer.service';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CITIES} from './cities.data';

@Component({
    selector: 'app-customer-edit',
    templateUrl: './customer-edit.component.html',
    styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
    public emailFormControl: FormControl;
    public customerFormGroup: FormGroup;
    public filteredCities: Observable<string[]>;
    private readonly cityFormControl: FormControl;

    constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService) {

        this.emailFormControl = new FormControl("",
            [
                Validators.required,
                Validators.email,
                CustomerValidators.forbiddenEmailValidator("irian.ro")
            ],
            [
                this.uniqueEmailValidator()
            ]);

        this.cityFormControl = new FormControl()

        this.customerFormGroup = new FormGroup({
            firstName: new FormControl("", [Validators.required]),
            lastName: new FormControl("", [Validators.required]),
            email: this.emailFormControl,
            phone: new FormControl(""),
            address: new FormGroup({
                street: new FormControl(),
                city: this.cityFormControl,
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
        this.filteredCities = this.cityFormControl.valueChanges.pipe(
            startWith(''),
            map(value => {
                const filterValue = value.toLowerCase();
                return CITIES.filter(option => option.toLowerCase().includes(filterValue));
            }),
        );
    }
    
    onSubmit() {
        console.log({
            ...this.customerFormGroup.value,
            _id: this.customer._id
        });
    }

    private uniqueEmailValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (control.value && this.customer.email !== control.value) {
                return this.customerService.isEmailTaken(control.value).pipe(
                    map(isTaken => {
                        return isTaken ? {uniqueEmail: true} : null;
                    })
                );
            }

            return of(null);
        };
    }
}
