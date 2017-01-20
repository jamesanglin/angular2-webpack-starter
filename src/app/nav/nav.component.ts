import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.ts';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public menuItems: MenuItem[];

  public ngOnInit() {
    this.menuItems = [
      { caption: 'Home', link: ['/home'] },
      { caption: 'Detail', link: ['/detail'] },
      { caption: 'Barrel', link: ['/barrel'] },
      { caption: 'About', link: ['/about'] }
    ];
  }
}
