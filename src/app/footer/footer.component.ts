import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() sidenav: any;

  public copywrite = '© 2018 - 2019';

  public openSideNav() {
    this.sidenav.toggle();
  }
}
