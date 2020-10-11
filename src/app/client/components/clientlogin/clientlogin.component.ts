import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Client } from '../../modules/Client.module';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.component.html',
  styleUrls: ['./clientlogin.component.css']
})
export class ClientloginComponent implements OnInit {

 
  client=new Client();
  clients:Client[];
  @Output() clientlogin:EventEmitter<any>=new EventEmitter();
  
  constructor(private router:Router,private clientservice:ClientService) { }

  ngOnInit() {
    this.getall();
  }

  getall(){
    this.clientservice.getall()
    .subscribe(response=>this.clients=response);   
  }
 

  login(){
    let tag:Boolean=false;
    
    
    
    for(let i=0;i<this.clients.length;i++){
      if(this.clients[i].username==this.client.username && this.clients[i].password==this.client.password && this.clients[i].role=="Client"){
        tag=true;  
      }          
    } 
    
    if(tag==true){   
      sessionStorage.setItem('clientusername',this.client.username);  
      this.clientservice.sendnotification("hello"); 
      this.router.navigate(['/shop'])
    }
    else{
      alert("login ou mot de passe incorrect")
    }
   
}

}
