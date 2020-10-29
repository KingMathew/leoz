import { ModalSuccessComponent } from './../../modals/modal-success/modal-success.component';
import { Component, OnInit } from '@angular/core';
import { BasicService } from './../../services/basicService';
import { Constants } from '../helpers/constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public name: string;
  public email: string;
  public message: string;
  public loading = false;

  constructor(private basicService: BasicService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  public sendEmail() {

    // if (this.name !== undefined
    //   && this.email !== undefined
    //   && this.message !== undefined) {
    //   if (this.name.trim() !== ''
    //     && this.email.trim() !== ''
    //     && this.message.trim() !== '') {
    //     if (this.isEmail(this.email.trim())) {
    //       const jsonToSend = {
    //         from: this.email,
    //         to: 'info@crn-ltda.com',
    //         subject: 'MENSAJE WEB CRN',
    //         message: this.message
    //       };
    //       console.log(jsonToSend);
    //       this.loading = true;
    //       this.basicService.sendPostRequest(jsonToSend, Constants.URL_SEND_EMAIL).subscribe(
    //         response => {
    //           console.log('Response :' + JSON.stringify(response));
    //           const obj = JSON.parse(JSON.stringify(response));
    //           if (obj.success === true) {
    //             this.loading = false;
    //             this.openModalSuccess('Hemos recibido su mensaje correctamente, pronto estaremos en contacto.');
    //           }
    //         }
    //       );
    //     } else {
    //       this.openModalWarning('Ingrese un correo electrónico válido');
    //     }
    //   } else {
    //     this.openModalWarning('Complete los campos para continuar');
    //   }
    // } else {
    //   this.openModalWarning('Complete los campos para continuar');
    // }


  }

  openModalWarning(message: string) {
    const modalRef = this.modalService.open(ModalSuccessComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.textButton = 'ACEPTAR';
  }

  openModalSuccess(message: string) {
    const modalRef = this.modalService.open(ModalSuccessComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.textButton = 'ACEPTAR';
    modalRef.result.then((data) => {
      // on close
    }, (reason) => {
      // on dismiss
      if (reason || reason === 0) {
        this.name = '';
        this.email = '';
        this.message = '';

      }
    });
  }


  isEmail(email: string): boolean {
    let validation: boolean;
    const regexp = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
    validation = regexp.test(email);
    return validation;
  }


}
