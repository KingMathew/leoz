import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.css']
})
export class ModalPhotoComponent implements OnInit {


  @Input() name;
  @Input() image;
  @Input() desc;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
