import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../modules/Categorie.module';
import { Fournisseur } from 'src/app/client/modules/Fournisseur.module';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url='http://localhost:8080/admin/categories';
  constructor(private http:HttpClient) { }

  getAll(){ 
    return this.http.get<Categorie[]>(this.url);
  }

  getAllfrn(){ 
    return this.http.get<Fournisseur[]>("http://localhost:8080/admin/fournisseurs");
  }

  create(resource:Categorie){    

    let nom:string=resource.catnom;
    return this.http.post(this.url+"/cat/"+nom,{ observe: 'response' });  

    
  }
 

 createsouscat(resource:Categorie,id:number){ 
  let nom:string=resource.catnom;
  return this.http.post<Categorie>(this.url+"/souscat/"+id+"/"+nom,{ observe: 'response' });
 }

 update(resource:Categorie){
     return this.http.put<Categorie>(this.url+"/"+resource.catid+"/"+resource.catnom,{ observe: 'response' });
 }
 updatesouscat(resource:Categorie,id:number){    
  return this.http.put<Categorie>(this.url+"/"+resource.catid+"/"+id+"/"+resource.catnom,{ observe: 'response' });
 }
 delete(resource:Categorie){
   return this.http.delete(this.url+"/"+resource.catid);
 }
}
