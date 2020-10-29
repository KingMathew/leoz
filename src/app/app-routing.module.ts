import { ServicesComponent } from './components/services/services.component';
import { CrnComponent } from './components/crn/crn.component';
import { ContactComponent } from './components/contact/contact.component';
import { BuildingComponent } from './components/building/building.component';
import { HomeComponent } from './components/home/home.component';
import { MiningComponent } from './components/mining/mining.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: CrnComponent
  },
  {
    path: 'portafolio',
    component: MiningComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
