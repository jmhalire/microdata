import { Component, ElementRef, ViewChild } from '@angular/core';
import { dashboard } from '@animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ dashboard ]
})
export class AppComponent {

  message: boolean;
  @ViewChild('main', {static:true}) main: ElementRef;
  constructor(){
  }

  public eventSidenav(e: boolean) {
    this.message = e;
    if (e) {
      this.main.nativeElement.classList.add('openSidenav');
    } else {
      this.main.nativeElement.classList.remove('openSidenav');
    }
  }
}
