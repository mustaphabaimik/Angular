import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../modules/Client.module';
import { Subject } from 'rxjs';
import { Produit } from 'src/app/fournisseur/modules/Produit.module';
import { Commande } from '../modules/commande.module';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url='http://localhost:8080/admin/clients';

  private clientsource=new Subject<string>();
  clientmessage$ =this.clientsource.asObservable();

  private addtocart=new Subject();
  addcart$ =this.addtocart.asObservable();

  private deletefromcart=new Subject();
  deletefromcart$ =this.deletefromcart.asObservable();
  constructor(private http:HttpClient) { }


  getall(){
    return this.http.get<Client[]>(this.url);
  }
  getallcmd(){
    return this.http.get<Commande[]>("http://localhost:8080/admin/commandes");
  }

  create(resource:Array<String>){
    return this.http.post(this.url+"/"+resource, { observe: 'response' }); 
  }


  sendnotification(message:string){
      this.clientsource.next(message);
  }

  addtopanier(){
      this.addtocart.next();
  }

  deletefrompanier(){
    this.deletefromcart.next();
  }


  addproducttocmd(produit:string,client:string){

    return this.http.post("http://localhost:8080/admin/commandes/"+client+"/"+produit, { observe: 'response' }); 
  }

  confirmerAchat(resource:Array<number>){
    return this.http.put<Commande>("http://localhost:8080/admin/commandes/confirmercmd/"+resource,{ observe: 'response' });
  }
}
