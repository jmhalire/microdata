import { Component, Input, OnInit } from '@angular/core';
import { sidenav } from '@animations/animations';
import { SidenavLink } from '@interfaces/sidenav-link';
import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [ sidenav ]
})
export class SidenavComponent implements OnInit {

  sidenavLink: SidenavLink[];
  @Input() stateSidenav: boolean;
  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.sidenavLink = this.sidenavService.links();
  }

}
