import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../modules/Produit.module';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url='http://localhost:8080/admin/produits';
  constructor(private http:HttpClient) { }

  create(uploadImageData:any,resource:Array<String>,fournisseur:String,categorie:number){
    return this.http.post(this.url+"/"+resource+"/"+fournisseur+"/"+categorie,uploadImageData, { observe: 'response' }); 
  }

  getall(){
    return this.http.get<Produit[]>(this.url);
  }
}
