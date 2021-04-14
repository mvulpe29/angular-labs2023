import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPizza} from "./app.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PizzaRestService {

  private url: string = "https://angular-labs2021-59f10-default-rtdb.firebaseio.com/pizzas.json";

  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }
}
