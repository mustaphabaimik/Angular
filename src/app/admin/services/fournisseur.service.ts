import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fournisseur } from 'src/app/client/modules/Fournisseur.module';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private url='localhost:8080/admin/fournisseurs';

  constructor(private http:HttpClient) { }

  login(username:string,password:string){    
    return this.http.get(this.url+"/check/"+username+"/"+password,{responseType:'text' as 'json'}); 
  }

  getAll(){  
      return this.http.get<Fournisseur[]>("http://localhost:8080/admin/fournisseurs"); 
  }

  validercompte(id:number){  
    return this.http.put("http://localhost:8080/admin/fournisseurs"+"/"+id,{ observe: 'response' }); 
  }
  
}
