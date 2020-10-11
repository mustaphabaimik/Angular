import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pays } from '../modules/Pays.module';


@Injectable({
  providedIn: 'root'
})
export class PayserviceService {

  private url='https://restcountries.eu/rest/v2/all';
  constructor(private http:HttpClient) { }

  getAll(){ 
    return this.http.get<Pays[]>(this.url);
  }

 

}
