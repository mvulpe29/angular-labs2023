import {Injectable, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPizza, IReview} from "./pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {Observable} from "rxjs";

@Injectable()
export class PizzaRestService implements IPizzaService {

  private url: string = "https://angular-labs2021-59f10-default-rtdb.firebaseio.com/pizzas";
  private reviewUrl: string = "https://us-central1-angular-labs2021-59f10.cloudfunctions.net/app";

  constructor(private http: HttpClient) {
  }

  getPizza(id: string): Observable<IPizza | undefined> {
    return this.http.get<IPizza>(`${this.url}/${id}.json`);
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url + '.json');
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    const url: string = this.reviewUrl + '/review/' + pizza.id;
    return this.http.post<IPizza>(url, review);
  }

}


export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaRestService
};
