import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commande } from 'src/app/client/modules/commande.module';
import { Detailcmd } from 'src/app/client/modules/detailcmd.module';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private url='http://localhost:8080/admin/commandes';
  constructor(private http:HttpClient) { }

  getAll(){ 
    return this.http.get<Commande[]>(this.url);
  }

  updatecart(idcmd:number,reference:string){
    return this.http.put<Detailcmd>(this.url+"/"+idcmd+"/"+reference,{ observe: 'response' });
  }

  updateqte(idcmd:number,reference:string,qte:number){
    return this.http.put<Detailcmd>(this.url+"/updateqte/"+idcmd+"/"+reference+"/"+qte,{ observe: 'response' });
  }
}
