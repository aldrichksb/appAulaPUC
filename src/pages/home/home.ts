import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BebidaService } from '../../providers/hero-service/bebida-service';
//import { DescriptionPage} from '../../pages/description';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public obj: any;
  public bebida: any;
  
  constructor(public navCtrl: NavController, public heroService: BebidaService) {
    this.getAllHeroes();
  }

  getAllHeroes() {
    this.heroService.load()
      .then(data => {
        this.obj = data;
        this.bebida = this.obj;
      });
  }

  getDescription(id:number){
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    }
    )
  }

}
