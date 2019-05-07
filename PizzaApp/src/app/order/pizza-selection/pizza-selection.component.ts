import { Component, Input, OnInit, Self } from '@angular/core';
import { IPizzaOrder } from '../pizza-order.model';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NgControl } from '@angular/forms';
import { PriceValidator } from '../price-validator.directive';

@Component({
  selector: 'pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css']
})
export class PizzaSelectionComponent implements OnInit, ControlValueAccessor {
  public form: FormArray;
  public control: AbstractControl;
  private _onChange: (value: IPizzaOrder[]) => void;
  private _selectedPizzaOrders: IPizzaOrder[];

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  private _pizzaOrderOptions: IPizzaOrder[];

  get pizzaOrderOptions(): IPizzaOrder[] {
    return this._pizzaOrderOptions;
  }

  @Input()
  set pizzaOrderOptions(value: IPizzaOrder[]) {
    this._pizzaOrderOptions = value;

    if (value) {

      value.map(item => {
        this.form.push(
          new FormGroup({
              pizza: new FormControl(item.pizza),
              quantity: new FormControl(0),
            }
          )
        );
      });
    }
  }

  ngOnInit() {
    this.control = this.controlDir.control;


    this.controlDir.control.setValidators(PriceValidator.validate(30));
    this.controlDir.control.updateValueAndValidity();

    this.form = new FormArray([]);
    this.form.valueChanges.subscribe((value: IPizzaOrder[]) => {
      this._onChange(value);
    });
  }

  onChange() {
    this._selectedPizzaOrders = this.pizzaOrderOptions.filter(order => {
      return order.quantity > 0;
    });
    console.log("this._onChange")
    console.log(this._selectedPizzaOrders);
  }


  writeValue(obj: any): void {
    this._selectedPizzaOrders = obj.filter(order => {
      return order.quantity > 0;
    });
    this._selectedPizzaOrders = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

}
