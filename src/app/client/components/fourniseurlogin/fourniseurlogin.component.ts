import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../modules/Fournisseur.module';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fourniseurlogin',
  templateUrl: './fourniseurlogin.component.html',
  styleUrls: ['./fourniseurlogin.component.css']
})
export class FourniseurloginComponent implements OnInit {

  statut=true;
  etat=true;
  fournisseur=new Fournisseur();
  fournisseurs:Fournisseur[];
  constructor(private fournisseurservice:FournisseurService,private router:Router) { }

  ngOnInit() {
    this.getall();
  }

  register(){
    this.statut=!this.statut;
  }
  changestatut(){
    this.etat=!this.etat;
  }


  
    getall(){
      this.fournisseurservice.getAll()
      .subscribe(response=>this.fournisseurs=response);   
    }
  
  login(){
      let tag:Boolean=false;
      let compte:boolean=false;
      let index:number;
      
      for(let i=0;i<this.fournisseurs.length;i++){
        if(this.fournisseurs[i].username==this.fournisseur.username && this.fournisseurs[i].password==this.fournisseur.password && this.fournisseurs[i].role=="Fournisseur"){
          tag=true;  
          if(this.fournisseurs[i].etat_compte=="valide"){
            compte=true;
          }
          index=i;
        }          
      } 
      
      if(tag==true && compte==true){   
        sessionStorage.setItem('username',this.fournisseur.username);    
        this.router.navigate(['/fournisseur'])
      }
      else if(tag==true && compte==false){
        alert("votre compte est n'est encore validé")
      }
      else if(tag==false){
        alert("login ou mot de passe incorrect")
      }
     
  }

}
