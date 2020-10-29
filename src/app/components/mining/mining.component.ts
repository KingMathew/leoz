import { Component, OnInit, Input } from '@angular/core';
import { BasicService } from './../../services/basicService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPhotoComponent } from 'src/app/modals/modal-photo/modal-photo.component';
import { ModalCarrouselComponent } from 'src/app/modals/modal-carrousel/modal-carrousel.component';
import { Constants } from '../helpers/constants';


@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {

  //listProducts: any;


  listProducts: Array<GuitarModel> = [
    { name: "La Sst24 Deep Black Glossy", image: "../../../assets/images/guitars/img_guitars_1.png", desc: "Ofrece un sonido inspirador y flexible y se puede utilizar para cualquier tipo de música, cuenta con algunas adiciones para ampliar su rendimiento.     (Cuerpo de Strat) Sus curvas y contornos hace que su ergonomía sea envidiable y codiciada, tiene un cuello ¨C¨ que es muy suave para el contacto con la mano." },
    { name: "SSt24 Customizada Azul y Negra", image: "../../../assets/images/guitars/img_guitars_3.png", desc: "Esta guitarra crea tonos increíbles gracias de sus pastillas. tiene un cuello C muy cómodo y delgado y su acabado tiene un aspecto moderno y expresivo."},
    { name: "Leoz modelo #Lune #2", image: "../../../assets/images/guitars/img_guitars_4.png", desc: "Tipo de construcción SET THROUGH Configuración: Brazo de tres piezas amarillo-nazareno-amarillo. Diapasón en velero. Cuerpo en cedro amargo. Top en ébano mallado.Puente y clavijas Gotoh (hardware). Trastes en acero inoxidable medium jumbo. Electrónica v-t 3way switch. Acabado en poliuretano brillante."},
    { name: "Sst24 caramelo", image: "../../../assets/images/guitars/img_guitars_5.png", desc: "Cuenta con bordes de diapasón redondeados, un acabado satinado 'Super-Natural' y un talón de mástil recién esculpido para una sensación sumamente cómoda. Ofrece tonos contundentes y sonidos calibrados de bobina simple con solo presionar un botón. Un trémolo mejorado de 2 puntos con un bloque de acero laminado en frío aumenta el sustain, la claridad y el brillo de alta gama."},
    { name: "LG2PRO 'la guitarra del presidente'", image: "../../../assets/images/guitars/img_guitars_6.png", desc: "El tono de esta guitarra tiene un sonido perfecto para hacerse oír a través de una mezcla densa. Un mástil de arce tostado y un gran golpeador agregan un toque visual a este instrumento único."},
    { name: "Lune con sistema 'Bolt On' desplazado", image: "../../../assets/images/guitars/img_guitars_7.png", desc: "Este mismo permite al músico ejecutar digitaciones con mayor comodidad en los trastes altos; solamente encarando el grosor del brazo, el Neck Pocket diseñado con Las curvas exactas para que la mano encaje de manera perfecta y así lograr comodidad y ergonomía."},
    { name: "Leoz 335", image: "../../../assets/images/guitars/img_guitars_8.png", desc: "La guitarra no es de cuerpo macizo ni totalmente hueco, sino que tiene un bloque de madera en el interior de la caja de resonancia, compartimentando ésta y moderando con ello su vibración."},
    { name: "Modelo Lune #1", image: "../../../assets/images/guitars/img_guitars_11.png", desc: "La primera versión de la línea Lune, con un cuerpo mas grande que su sucesora y cuello em C muy similar al que poseen las SST24 esta guitarra mezcla comodidad, elegancia y gran sonido ya que mantiene las características principales de la línea Lune."},
  
  ];

  constructor(private modalService: NgbModal, private basicService: BasicService) {
    // const jsonToSend = {
    //   table: 'products',
    //   fields: '*',
    //   conditions: {
    //     key: 'idType',
    //     value: '1'
    //   },
    //   order: {
    //     key: 'order',
    //     value: 'asc'
    //   }
    // };
    // this.basicService.sendPostRequest(jsonToSend, Constants.URL_SELECT).subscribe(
    //   response => {
    //     //console.log(response);
    //     this.listProducts = response;
    //   }
    // );

  }
  public miningProducts = {};

  ngOnInit() {
  }


  openModal(item: any) {

      const modalRef = this.modalService.open(ModalPhotoComponent, { size: 'lg' });
      modalRef.componentInstance.name = item.name;
      modalRef.componentInstance.image = item.image;
      modalRef.componentInstance.desc = item.desc;

      console.log(item.desc);
  }

}

interface GuitarModel {
  name: string;
  image: string;
  desc: string;
}
