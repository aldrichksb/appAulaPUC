import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BebidaService } from '../../providers/hero-service/bebida-service';
import { Bebida } from '../../models/bebida';

/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  public id;
  public obj: any;
  public bebida: Bebida;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public bebidaService: BebidaService) {
    this.id = navParams.get("id");
    this.bebida = new Bebida();
    this.bebidaService.getDescription(this.id)
    .then(data => {
      this.obj = data;
      console.log(this.obj);
      this.bebida.title = this.obj.title; 
      this.bebida.preco = this.obj.preco;
      this.bebida.tipo =  this.obj.tipo;
      this.bebida.estilo =  this.obj.estilo;
      this.bebida.produtora =  this.obj.produtora;
      this.bebida.teorAlcoolico =  this.obj.teor;
      this.bebida.imagem =  this.obj.imagem;

      console.log(this.bebida);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }

}
