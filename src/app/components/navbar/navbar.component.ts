import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public stateSidenav: boolean;
  @Output() emitEvent = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnInit(): void {
    this.stateSidenav = true;
    this.sidenav();
  }

  public sidenav() {
    this.stateSidenav = !this.stateSidenav;
    this.emitEvent.emit(this.stateSidenav);

  }
}
