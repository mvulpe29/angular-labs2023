import {IPizza} from './pizza.model';

export interface IPizzaOrder {
  _id?: string;
  pizza: IPizza;
  quantity: number;
}
