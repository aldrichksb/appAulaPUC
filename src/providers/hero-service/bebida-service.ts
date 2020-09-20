import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Md5 } from "ts-md5/dist/md5";

/*
  Generated class for the HeroService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BebidaService {
  data: any;
  constructor(public http: Http) {
    console.log("Hello");
  }

  load() {
    return new Promise(resolve => {

      this.http
        .get(
          `https://my-json-server.typicode.com/aldrichksb/bancoAppAulaPUC/bebidas`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getDescription(id: number) {
    return new Promise(resolve => {

      this.http
        .get(
          `https://my-json-server.typicode.com/aldrichksb/bancoAppAulaPUC/bebidas/${id}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
