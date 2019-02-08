import {Component, Input, OnInit} from '@angular/core';
import {IPizzaOrder} from '../pizza-order.model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pizza-selection',
  templateUrl: './pizza-selection.component.html',
  styleUrls: ['./pizza-selection.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, multi: true, useExisting: PizzaSelectionComponent
  }]
})
export class PizzaSelectionComponent implements OnInit, ControlValueAccessor {
  private _onChange: (value: any) => void;
  private _selectedPizzaOrders: IPizzaOrder[];

  constructor() {
  }

  private _pizzaOrderOptions: IPizzaOrder[];

  get pizzaOrderOptions(): IPizzaOrder[] {
    return this._pizzaOrderOptions;
  }

  @Input()
  set pizzaOrderOptions(value: IPizzaOrder[]) {
    this._pizzaOrderOptions = value;
  }

  ngOnInit() {
  }

  onChange() {
    this._selectedPizzaOrders = this.pizzaOrderOptions.filter(order => {
      return order.quantity > 0;
    });
    this._onChange(this._selectedPizzaOrders);
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
