import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPhotoComponent } from 'src/app/modals/modal-photo/modal-photo.component';
import { BasicService } from './../../services/basicService';
import { Constants } from '../helpers/constants';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  listProducts: any;

  constructor(private modalService: NgbModal, private basicService: BasicService) {
    const jsonToSend = {
      table: 'products',
      fields: '*',
      conditions: {
        key: 'idType',
        value: '2'
      },
      order: {
        key: 'order',
        value: 'asc'
      }
    };
    this.basicService.sendPostRequest(jsonToSend, Constants.URL_SELECT).subscribe(
      response => { this.listProducts = response; }
    );

  }
  public miningProducts = {};

  ngOnInit() {

  }

  openModalPhoto(item: any) {
    const modalRef = this.modalService.open(ModalPhotoComponent, { size: 'lg' });
    modalRef.componentInstance.name = item.name;
    modalRef.componentInstance.image = item.image;
    modalRef.componentInstance.desc = item.description;
  }
}
