import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPizza} from "./app.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PizzaRestService {

  private url: string = "http://pizza-store.herokuapp.com/api/pizzas";

  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }
}
