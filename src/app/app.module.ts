import { ModalSuccessComponent } from './modals/modal-success/modal-success.component';
import { CrnComponent } from './components/crn/crn.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ModalPhotoComponent } from './modals/modal-photo/modal-photo.component';
import { BuildingComponent } from './components/building/building.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiningComponent } from './components/mining/mining.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalCarrouselComponent } from './modals/modal-carrousel/modal-carrousel.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      MiningComponent,
      BuildingComponent,
      ModalPhotoComponent,
      ModalSuccessComponent,
      ModalCarrouselComponent,
      ContactComponent,
      ServicesComponent,
      CrnComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [ModalPhotoComponent, ModalSuccessComponent, ModalCarrouselComponent]
})
export class AppModule { }
