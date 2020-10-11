import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/admin/services/commande.service';
import { Commande } from '../../modules/commande.module';
import { Client } from '../../modules/Client.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  clientusername:string;
  nbr:number;
  loggedin:boolean=false;
  commandes:Commande[];
  clients:Client[];
  constructor(private clientservice:ClientService,private route:Router,private commadeservice:CommandeService) { }

  ngOnInit() {
     
   
   this.commadeservice.getAll()
   .subscribe(response=>this.commandes=response);

   this.clientservice.getall()
   .subscribe(response=>this.clients=response);

    this.clientusername=sessionStorage.getItem('clientusername');
    if(this.clientusername==null){
      this.loggedin=false;
    }
    else{
      this.loggedin=true;
    }

    this.clientservice.clientmessage$
    .subscribe(message=>{
      this.clientusername=sessionStorage.getItem('clientusername');
      if(this.clientusername==null){
        this.loggedin=false;
      }
      else{
        this.loggedin=true;
      }
    });

    this.clientservice.addcart$
    .subscribe(response=>{       
              for(let i=0;i<this.clients.length;i++){
                if(this.clients[i].username==this.clientusername){                
                    for(let j=0;j<this.clients[i].commands.length;j++){               
                      if(this.clients[i].commands[j].status=="nonvalide"){         
                              this.clients[i].commands[j].lcommandes.length++;                        
                      }
                    }           
                }
              }
              this.getnbr();

              for(let i=0;i<this.clients.length;i++){
                if(this.clients[i].username==this.clientusername){ 
                    alert(this.clients[i].commands.length);
                }
              }            

    });


    this.clientservice.deletefromcart$
    .subscribe(response=>{
      for(let i=0;i<this.clients.length;i++){
        if(this.clients[i].username==this.clientusername){
            for(let j=0;j<this.clients[i].commands.length;j++){
              if(this.clients[i].commands[j].status=="nonvalide"){         
                      this.clients[i].commands[j].lcommandes.length--;
                      
                     
              }
            }
        }
      }

      this.getnbr();
    });

   
    this.getnbr();
    
  }

 
  logout(){
    
    this.clientusername=null;
    this.loggedin=false;
    sessionStorage.clear();
    this.clientservice.sendnotification("hello");
    this.route.navigate(['/shop'])

  }

  getnbr(){
   
    this.nbr=0;
    if(this.clientusername==null){
      this.nbr=0;
      return this.nbr;
    }
    else{
          for(let i=0;i<this.clients.length;i++){
            if(this.clients[i].username==this.clientusername){
                 for(let j=0;j<this.clients[i].commands.length;j++){
                   if(this.clients[i].commands[j].status=="nonvalide"){
                     for(let k=0;k<this.clients[i].commands[j].lcommandes.length;k++){
                          this.nbr=this.clients[i].commands[j].lcommandes.length;                        
                          return this.nbr;
                     }
                   }
                 }
            }
          }
          
    }

    return this.nbr;

   
    
  }


  

}
