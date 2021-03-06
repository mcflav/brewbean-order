import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brewbean-order';
  showOrder = false;

  orderLinkClicked(eventData: {order: string}){
    this.showOrder = !this.showOrder;
  }
}
