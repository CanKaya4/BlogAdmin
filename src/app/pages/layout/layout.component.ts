import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { BodyComponent } from "../body/body.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, BodyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }
}
