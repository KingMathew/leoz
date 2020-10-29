
import { BasicService } from './../../services/basicService';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Swiper from './swiper.min.js';
import { Constants } from '../helpers/constants';
import { ModalCarrouselComponent } from '../../modals/modal-carrousel/modal-carrousel.component';
import { ModalPhotoComponent } from '../../modals/modal-photo/modal-photo.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public endpointImages = "../../../assets/images/clients/";

  listClients = ["clients1.jpg", "clients2.jpg", "clients3.jpg", "clients4.jpg", "clients5.png"];


  constructor(private modalService: NgbModal) {

    // const jsonToSend = {
    //   "table": "suppliers",
    //   "fields": "*"
    // }
    // this.basicService.sendPostRequest(jsonToSend, Constants.URL_SELECT).subscribe(
    //   response => { this.listaPoveedores = response; }
    // );

  }



  ngOnInit() {
    this.startSwiper();
  }

  public startSwiper() {
    new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

  }

  openModalCarrousel(id: number) {

    let item: any;
    switch (id) {
      case 1: {
        item = { name: "", image: "../../../assets/images/guitars/img_guitars_1.png", description: "", isDetail: 0 };
        break;
      }
      case 2: {
        item = { name: "", image: "../../../assets/images/guitars/img_guitars_2.png", description: "", isDetail: 0 };
        break;
      }
      case 3: {
        item = { name: "", image: "../../../assets/images/guitars/img_guitars_3.png", description: "", isDetail: 0 };
        break;
      }
      case 4: {
        item = { name: "", image: "../../../assets/images/guitars/img_guitars_4.png", description: "", isDetail: 0 };
        break;
      }
      case 5: {
        item = { name: "", image: "../../../assets/images/guitars/img_guitars_5.png", description: "", isDetail: 0 };
        break;
      }
      case 6: {
        item = { name: "", image: "../../../assets/images/guitars/img_guitars_6.png", description: "", isDetail: 0 };
        break;
      }
      case 7: {
        item = { name: "", image: "../../../assets/images/guitars/img_guitars_7.jpg", description: "", isDetail: 0 };
        break;
      }
      default: {
        break;
      }
    }

    const modalRef = this.modalService.open(ModalPhotoComponent, { size: 'lg' });
    //modalRef.componentInstance.name = item.name;
    modalRef.componentInstance.image = item.image;
    //modalRef.componentInstance.desc = item.description;


  }

}
