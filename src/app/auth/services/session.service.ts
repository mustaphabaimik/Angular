import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private url='http://127.0.0.1:9090/api/students';

  constructor(private http:HttpClient) { }


  login(username:string,password:string){    
    const headers=new HttpHeaders({Authorization: 'Basic ' + btoa(username+":"+password)});
    return this.http.get("http://localhost:8080/api/login",{headers,responseType:'text' as 'json'});
  }
}
