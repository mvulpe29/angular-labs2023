import {Injectable, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPizza, IReview} from "./pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {Observable} from "rxjs";

@Injectable()
export class PizzaRestService implements IPizzaService {

  private url: string = "https://angular-labs2021-59f10-default-rtdb.firebaseio.com/pizzas.json";

  constructor(private http: HttpClient) {
  }

  getPizza(id:string): Observable<IPizza> {
    return this.http.get<IPizza>(`${this.url}/${id}`);
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    const url: string = this.url + '/addReview/' + pizza._id;
    return this.http.put<IPizza>(url, review);
  }

}


export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaRestService
};
