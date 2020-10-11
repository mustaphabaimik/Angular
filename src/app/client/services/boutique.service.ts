import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boutique } from '../modules/Boutique.module';
import { Fournisseur } from '../modules/Fournisseur.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  private url='http://localhost:8080/admin/boutiques';

  private boutiquesource=new Subject<string>();
  myboutique$ =this.boutiquesource.asObservable();
  constructor(private http:HttpClient) { }

  
  create(uploadImageData:any,resource:Array<String>,fournisseur:Array<String>,cats:Array<number>){
    return this.http.post(this.url+"/"+resource+"/"+fournisseur+"/"+cats,uploadImageData, { observe: 'response' }); 
  }

  getall(){
    return this.http.get<Boutique[]>(this.url);
  }


  sendnotification(fournisseur:string){
    this.boutiquesource.next(fournisseur);
}
}
