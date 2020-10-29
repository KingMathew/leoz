import { Product } from './models/product';
import { Component } from '@angular/core';
import 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor(private router: Router) { }

  title = 'crn-angular';

  public goToSection(numberSection: number) {
    switch (numberSection) {
      case 0: {
        this.router.navigateByUrl('/inicio');
        break;
      }
      case 1: {
        this.router.navigateByUrl('/nosotros');
        break;
      }
      case 4: {
        this.router.navigateByUrl('/portafolio');
        break;
      }
      case 5: {
        this.router.navigateByUrl('/contacto');
        break;
      }
      default: {
        this.router.navigateByUrl('/inicio');
        break;
      }
    }
  }

}
