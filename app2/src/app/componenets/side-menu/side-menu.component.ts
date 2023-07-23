import { Component, Input } from '@angular/core';
import { SideMenu } from 'src/app/models/sideMenu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  @Input() menu:SideMenu[] = [];

  
}
