import {Component, Input} from "@angular/core";
import {IPizza} from "../app.model";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class TabsComponent {

  @Input()
  pizza: IPizza;

  private tab: number;

  constructor() {
    this.tab = 1;
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }
}
