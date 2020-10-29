import { Constants } from './../../components/helpers/constants';
import { BasicService } from './../../services/basicService';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-carrousel',
  templateUrl: './modal-carrousel.component.html',
  styleUrls: ['./modal-carrousel.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class ModalCarrouselComponent implements OnInit {

  @Input() item: any;
  listDetail: any;

  constructor(public activeModal: NgbActiveModal, config: NgbCarouselConfig, private basicService: BasicService) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    console.log(this.item);
    const jsonToSend = {
      table: 'productsDetail',
      fields: '*',
      conditions: {
        key: 'idProduct',
        value: this.item.id
      },
      order: {
        key: 'order',
        value: 'asc'
      }
    };
    this.basicService.sendPostRequest(jsonToSend, Constants.URL_SELECT).subscribe(
      response => {
        this.listDetail = response;
      }
    );

  }

}
