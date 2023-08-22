import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() SideNavigationToggle=new EventEmitter();

  OnToggleOpenSideNav(){
    this.SideNavigationToggle.emit();
  }
}
