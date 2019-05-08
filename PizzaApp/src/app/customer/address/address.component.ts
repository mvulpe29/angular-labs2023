import { Component, OnInit, Self } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { IAddress } from './address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit, ControlValueAccessor {
  public addressFormGroup: FormGroup;
  private _onChange: (address: IAddress) => any;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;

    this.addressFormGroup = new FormGroup({
      street: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      zipCode: new FormControl(),
      country: new FormControl()
    });

  }


  ngOnInit() {
    this.controlDir.control.setValidators(this.aggregateErrorsFromAddressForm());
    this.addressFormGroup.valueChanges.subscribe(address => {
      this._onChange(address);
    });

  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(address: IAddress): void {
    if (address) {
      this.addressFormGroup.patchValue(address);
    }
  }

  private aggregateErrorsFromAddressForm(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const streetErrors = this.addressFormGroup.get("street").errors;
      const cityErrors = this.addressFormGroup.get("city").errors;

      if (streetErrors || cityErrors) {
        return {
          street: streetErrors ? Object.keys(streetErrors) : undefined,
          city: cityErrors ? Object.keys(cityErrors) : undefined
        };
      }

      return null;
    };
  }
}
